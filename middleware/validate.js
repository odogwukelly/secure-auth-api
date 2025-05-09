const { body, validationResult } = require("express-validator"); // Import validator methods

// Validation rules for login request
exports.loginValidator = [
  body("email")
    .exists()
    .withMessage("Email is required") // Ensure email field exists
    .isEmail()
    .withMessage("Invalid email format"), // Check for valid email

  body("password")
    .exists()
    .withMessage("Password is required") // Ensure password field exists
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"), // Minimum length check
];

// Error handler for validation results
exports.handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req); // Gather validation errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // Respond with 400 if any error exists
  }
  next(); // Proceed to controller if validation passed
};
