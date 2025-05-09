// A mock database containing a hardcoded user
const users = [
  {
    email: "test@example.com",
    password: "password123", // Note: In production, use hashed passwords
  },
  {
    email: "test2@example.com",
    password: "password", // Note: In production, use hashed passwords
  },
];

module.exports = users; // Export the mock users array
