const Product = require("../models/product.model");

const save = async (obj) => {
  return await obj.save();
};

module.exports = {
  save,
};
