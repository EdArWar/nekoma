const { Schema, model } = require("mongoose");

const Product = new Schema({
  productTitle: { type: String, required: true },
  productSecondTitle: { type: String, required: true },
  productDescription: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productImage: { type: String },
  productTag: { type: String },
  quantity: { type: Number, default: 1 },
  date: { type: Date, default: Date.now() },
});

module.exports = model("Product", Product);
