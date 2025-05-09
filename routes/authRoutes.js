const express = require("express");
const router = express.Router(); // Create a new router instance
const {
  loginValidator,
  handleValidationErrors,
} = require("../middleware/validate"); // Import validation middleware
const { login, verifyToken } = require("../controllers/authController"); // Import auth controller functions

// POST /api/login - Validate input, then run login logic
router.post("/login", loginValidator, handleValidationErrors, login);

// GET /api/verify - Optional: checks token validity
router.get("/verify", verifyToken);

module.exports = router; // Export router to be used in app.js
