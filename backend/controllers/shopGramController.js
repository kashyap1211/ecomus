import ShopGram from "../models/ShopGram.js";

// ✅ Get all products
export const getShopGramProducts = async (req, res) => {
  try {
    const products = await ShopGram.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Create product
export const createShopGramProduct = async (req, res) => {
  try {
    const newProduct = new ShopGram(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
