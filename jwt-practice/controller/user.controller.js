const helperUtil = require("../util/helper.util");
const userService = require("../service/user.service");
const User = require("../model/user.model");
const { StatusCodes } = require("http-status-codes");
const NotFoundError = require("../errors/error.classes/NotFoundError");
const BadRequestError = require("../errors/error.classes/BadRequestError");
const Response = require("../util/response.util");
const UnauthorizedError = require("../errors/error.classes/UnauthorizedError");

const UserRegister = async (req, res) => {
  const body = req.body;
  const newUser = new User(body);

  const isUserExist = await userService.findByEmail(body.email);

  if (isUserExist) {
    throw new BadRequestError("Email Already exist!");
  }

  const hash = await helperUtil.getEncryptedPassword(body.password);

  newUser.password = hash;

  try {
    const createdUser = await userService.save(newUser);

    return Response(
      res,
      StatusCodes.CREATED,
      true,
      "User created successfully!",
      createdUser
    );
  } catch (err) {
    throw err;
  }
};

const UserLogin = async (req, res) => {
  let credentials = req.body;

  const user = await userService.findByEmail(credentials.email);

  if (!user) throw new NotFoundError("Incorrect Email Address!");

  const isPasswordMatch = await helperUtil.comparePassword(
    credentials.password,
    user.password
  );

  if (!isPasswordMatch) throw new UnauthorizedError("Incorrect Password!");

  let payload = {
    _id: user._id,
    role: user.role,
  };

  const token = helperUtil.signToken(payload);

  return Response(res, StatusCodes.OK, true, "Login Successful!", {
    token,
    role: user.role,
  });
};

const GetUserProfileDetails = async (req, res) => {
  const auth = req.auth;

  const user = await userService.findById(auth._id);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  return Response(res, StatusCodes.OK, true, "", user);
};

module.exports = {
  UserRegister,
  UserLogin,
  GetUserProfileDetails,
};
