import mongoose from "mongoose";

const clientReviewSchema = new mongoose.Schema({
  title: String,
  desc: String,
  name: String,
  location: String,
  image: String,
  productname: String,
  price: String,
}, { timestamps: true });

export default mongoose.model("ClientReview", clientReviewSchema);
