const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SALT = process.env.GEN_SALT;
const SECRET = process.env.JWT_SECRET;

const getEncryptedPassword = async (password) => {
  const salt = await bcrypt.genSalt(Number(SALT));
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, encryptedPassword) => {
  return await bcrypt.compare(password, encryptedPassword);
};

const signToken = (obj) => {
  const maxAge = 60 * 60 * 24 * 3; //for 3 days
  return jwt.sign(obj, SECRET, {
    expiresIn: maxAge,
  });
};

const extractToken = (bearerToken) => {
  const bearerArray = bearerToken.split(" ");

  if (bearerArray.length === 2) {
    return bearerArray[1];
  } else {
    return null;
  }
};

module.exports = {
  getEncryptedPassword,
  comparePassword,
  signToken,
  extractToken,
};
