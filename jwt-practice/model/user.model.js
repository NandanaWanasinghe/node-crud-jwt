const mongoose = require("mongoose");
const constant = require("../constants");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is Required!"],
      maxlength: [100, "Full Name shouldn't be exceed 100 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is Required!"],
      validate: {
        validator: (value) => {
          return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          );
        },
        message: "Invalid Email Address!",
      },
    },

    picture: {
      type: String,
      required: [true, "User picture is required!"],
    },

    password: {
      type: String,
      required: [true, "Password is required!"],
    },

    role: {
      type: String,
      required: [true, "Role is required!"],
      enum: {
        values: [constant.USER.ADMIN, constant.USER.USER],
        message: "Valid Role is required!",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
