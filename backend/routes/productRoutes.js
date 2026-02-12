const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  searchProducts,
  getProductById
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/search", searchProducts);
router.get("/:id", getProductById);


module.exports = router;
