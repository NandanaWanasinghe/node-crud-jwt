const User = require("../model/user.model");

const save = async (obj) => {
  return await obj.save();
};

const findByEmail = async (email) => {
  return await User.findOne({
    email: email,
  });
};

const findById = (id) => {
  return User.findById(id);
};

module.exports = {
  save,
  findByEmail,
  findById,
};
