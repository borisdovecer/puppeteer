import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
});

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
