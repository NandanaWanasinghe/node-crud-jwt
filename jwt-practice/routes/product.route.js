const express = require("express");
const { CreateProduct } = require("../controller/product.controller");
const authMiddleware = require("../middleware/auth.middleware");
const constant = require("../constants");

const ProductRouter = express.Router();

ProductRouter.post(
  "/create",
  authMiddleware.authorize([constant.USER.ADMIN, constant.USER.USER]),
  CreateProduct
);

module.exports = ProductRouter;
