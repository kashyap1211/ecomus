import User from "../models/User.js";
import Product from "../models/Product.js";
import Blog from "../models/Blog.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStats = async (req, res) => {
  try {
    const [productCount, blogCount, userCount] = await Promise.all([
      Product.countDocuments(),
      Blog.countDocuments(),
      User.countDocuments(),
    ]);
    res.json({ products: productCount, blogs: blogCount, users: userCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    if (!role || !["user", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }
    const updated = await User.findByIdAndUpdate(id, { role }, { new: true }).select("-password");
    if (!updated) return res.status(404).json({ message: "User not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
