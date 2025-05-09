const jwt = require("jsonwebtoken"); // JWT library to generate and verify tokens
const users = require("../utils/mockDB"); // Import the mock user database

// Login handler
exports.login = (req, res) => {
  const { email, password } = req.body; // Extract email and password from request

  // Find user with matching email
  const user = users.find((u) => u.email === email);

  // If user not found or password does not match, return 401 Unauthorized
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  try {
    // Create a JWT token with the user's email as payload
    const token = jwt.sign(
      { email: user.email }, // Payload
      process.env.JWT_SECRET, // Secret key from .env
      { expiresIn: "1h" } // Token expiration time
    );

    // Return token in response
    return res.status(200).json({ token });
  } catch (err) {
    // Return 500 Internal Server Error on failure
    return res.status(500).json({ error: "Token generation failed" });
  }
};

// Verify JWT token (Bonus)
exports.verifyToken = (req, res) => {
  // Extract token from Authorization header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // Return 401 if token is not present
  if (!token) {
    return res.status(401).json({ error: "Token required" });
  }

  try {
    // Verify token using secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If successful, return decoded token
    return res.status(200).json({ valid: true, user: decoded });
  } catch (err) {
    // Invalid token error
    return res.status(401).json({ error: "Invalid token" });
  }
};
