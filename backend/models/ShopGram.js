import mongoose from "mongoose";

const shopGramSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
}, { timestamps: true });

export default mongoose.model("ShopGram", shopGramSchema);
