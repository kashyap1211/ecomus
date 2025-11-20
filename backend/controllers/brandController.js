import Brand from "../models/Brand.js";

// ✅ Get all brands
export const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Create new brand
export const createBrand = async (req, res) => {
  try {
    const newBrand = new Brand(req.body);
    const savedBrand = await newBrand.save();
    res.status(201).json(savedBrand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
