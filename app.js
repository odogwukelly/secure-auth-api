const express = require("express"); // Import Express framework
const app = express(); // Initialize Express app
const authRoutes = require("./routes/authRoutes"); // Import auth route handlers
require("dotenv").config(); // Load environment variables from .env file

app.use(express.json()); // Middleware to parse incoming JSON requests

// Register authentication routes under "/api"
app.use("/api", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000; // Use port from .env or fallback to 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log server startup
});
