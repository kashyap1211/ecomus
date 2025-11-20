import Product from "../models/Product.js";

// ✅ Get all products (with filters)
export const getProducts = async (req, res) => {
  try {
    const {
      categoryone,
      categorytwo,
      brand,
      color,
      size,
      availability,
      minPrice,
      maxPrice,
    } = req.query;

    let query = {};

    if (categoryone) query.categoryone = { $in: categoryone.split(",") };
    if (categorytwo) query.categorytwo = { $in: categorytwo.split(",") };
    if (brand) query.brand = { $in: brand.split(",") };
    if (color) query["colors.name"] = { $in: color.split(",") };
    if (size) query.sizes = { $in: size.split(",") };
    if (availability) query.availability = availability;
    if (minPrice && maxPrice) {
      query.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
    }

    // Debug logging
    console.log("🔍 Fetching products with query:", JSON.stringify(query, null, 2));
    
    try {
      const dbName = Product.db?.databaseName || "unknown";
      const collectionName = Product.collection?.collectionName || "unknown";
      console.log("📊 Database name:", dbName);
      console.log("📦 Collection name:", collectionName);
      
      // Count all products first
      const allProductsCount = await Product.countDocuments({});
      console.log(`📈 Total products in database: ${allProductsCount}`);
      
      // Count products matching query
      const productCount = await Product.countDocuments(query);
      console.log(`📈 Products matching query: ${productCount}`);
      
      // If no query filters, get all products
      const products = await Product.find(query).lean();
      console.log(`✅ Returning ${products.length} products`);
      
      // If no products found but database has products, log warning
      if (products.length === 0 && allProductsCount > 0) {
        console.warn("⚠️ WARNING: Query returned 0 products but database has", allProductsCount, "products!");
        console.warn("⚠️ This might indicate a query filter issue or collection mismatch");
      }
      
      res.json(products);
    } catch (dbError) {
      console.error("❌ Database error:", dbError);
      throw dbError;
    }
  } catch (err) {
    console.error("❌ Error in getProducts:", err);
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create product
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Get product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update product
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
