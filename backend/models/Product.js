import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    images: [String],
    colors: [
      {
        code: String,
        name: String,
      }],
    sizes: [String],
    categoryone: { type: String },
    categorytwo: { type: String },

    brand: { type: String },
    availability: { type: String, default: "instock" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
