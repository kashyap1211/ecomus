import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  image: String,
}, { timestamps: true });

export default mongoose.model("Brand", brandSchema);
