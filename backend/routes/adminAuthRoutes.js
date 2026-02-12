const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ADMIN LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email, role: "admin" });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }

    res.json({
      message: "Admin login successful",
      admin: {
        id: admin._id,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
