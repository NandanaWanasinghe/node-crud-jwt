const Product = require("../model/product.model");

const CreateProduct = async (req, res) => {
  const body = req.body;
  const auth = req.auth;

  const newProduct = new Product(body);

  newProduct.isAddedBy = auth._id;

  console.log(newProduct);
};

//get all products for both
// delete product ADMIN
// Update product ADMIN

module.exports = {
  CreateProduct,
};
