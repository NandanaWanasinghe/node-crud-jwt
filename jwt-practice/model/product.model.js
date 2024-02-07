const mongoose = require("mongoose");
const constant = require("../constants");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product name is required!"],
    maxlength: [100, "Product name shouldn't be exceed 100 characters"],
  },

  productDescription: {
    type: String,
    maxlength: [500, "Product description shouldn't be exceed 100 characters"],
  },

  productPrice: {
    type: Number,
    required: [true, "Product price is required!"],
  },

  productImage: {
    type: String,
    required: [true, "Product image is required!"],
  },

  productMeasure: {
    type: String,
    required: [true, "Product measure is required!"],
    enum: {
      values: [
        constant.PRODUCT.MEASURES.KG,
        constant.PRODUCT.MEASURES.LITER,
        constant.PRODUCT.MEASURES.PIECE,
      ],
    },
  },

  isAddedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
