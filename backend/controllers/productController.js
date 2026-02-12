const Product = require("../models/Product");

// Create product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find().populate("category");
  res.json(products);
};

// Search products
exports.searchProducts = async (req, res) => {
  try {
    const { q, category } = req.query;

    let filter = {};

    // 🔍 Search by product name
    if (q && q.trim() !== "") {
      filter.name = { $regex: q, $options: "i" };
    }

    // 📂 Filter by category
    if (category && category.trim() !== "") {
      filter.category = category;
    }

    const products = await Product.find(filter).populate("category");

    // ✅ ALWAYS return 200 (even if empty array)
    res.status(200).json(products);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
exports.getProductById = async (req, res) => {
  try {
    const product = await Product
      .findById(req.params.id)
      .populate("category");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

