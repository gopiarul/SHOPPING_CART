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
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ message: "Search query required" });
  }

  const products = await Product.find({
    name: { $regex: q, $options: "i" }
  }).populate("category");

  res.json(products);
};
