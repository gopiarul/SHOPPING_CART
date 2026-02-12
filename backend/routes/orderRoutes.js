const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

/* ======================
   PLACE ORDER (USER)
   POST /api/orders
====================== */
router.post("/", async (req, res) => {
  try {
    const { userId, cartItems, totalAmount, paymentMethod } = req.body;

    if (!userId || !cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const order = new Order({
      user: userId,
      cartItems,
      totalAmount,
      paymentMethod
    });

    await order.save();

    res.status(201).json({
      message: "Order placed successfully",
      order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   USER ORDER HISTORY
   GET /api/orders/user/:userId
====================== */
router.get("/user/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   ADMIN – ALL ORDERS
   GET /api/orders
====================== */
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "username email role")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
