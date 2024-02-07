const express = require("express");
const {
  UserRegister,
  UserLogin,
  GetUserProfileDetails,
} = require("../controller/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const constant = require("../constants");

const UserRouter = express.Router();

UserRouter.post("/register", UserRegister);
UserRouter.post("/login", UserLogin);
UserRouter.get(
  "/get-profile",
  authMiddleware.authorize([constant.USER.ADMIN, constant.USER.USER]),
  GetUserProfileDetails
);

module.exports = UserRouter;
