const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  searchProducts
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/search", searchProducts);

module.exports = router;
