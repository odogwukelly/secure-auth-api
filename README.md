# SimpliRide Tech Internship – Backend Authentication API

## Overview

This project is a secure authentication API built with Node.js and Express. It demonstrates best practices in input validation, JWT-based authentication, and error handling.

## Features

- Input validation using **express-validator**
- JWT token generation for authentication
- Mock user database
- Error handling with appropriate HTTP status codes
- Token verification endpoint (Bonus)

---

## Tech Stack

- **Node.js**
- **Express**
- **jsonwebtoken**
- **express-validator**
- **dotenv**

---

## Endpoints

### `POST /api/login`

**Description**: Authenticates user and returns a JWT token.

**Request Body**:

```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

## Validation Rules:

- Email must exist and be in a valid format.
- Password must exist and be at least 8 characters.

## Responses:

- `200 OK`: Returns JWT token.
- `400 Bad Request`: Missing or invalid inputs.
- `401 Unauthorized`: Invalid email or password.
- `500 Internal Server Error`: Token generation failure.

### `GET /api/verify`

**Description**: Verifies if a provided JWT token is valid.

**Header**:

```bash
    Authorization: Bearer <token>
```

## Responses:

- `200 OK`: Token is valid.
- `401 Unauthorized`: Missing or invalid token.

## `Setup Instructions`

### Clone the repository

```bash
git clone https://github.com/odogwukelly/secure-auth-api.git

cd secure-auth-api
```

### Install dependencies

```bash
npm install
```

### Create `.env` file

```bash
JWT_SECRET=SECRET_123
PORT=3000
```

### Run the app

```bash
node app.js
```

### Test with Postman or cURL

- POST `/api/login`
- GET `/api/verify` with Bearer Token

## Mock Users

Test users mock database:

```json
{
  "email": "test@example.com",
  "password": "password123"
},
{
  "email": "test2@example.com",
  "password": "password"
}
```

## Folder Structure

```bash
secure-auth-api/
├── controllers/
│   └── authController.js
├── middleware/
│   └── validate.js
├── routes/
│   └── authRoutes.js
├── utils/
│   └── mockDB.js
├── .env
├── .gitignore
├── app.js
├── package.json
├── README.md

```

## Notes

- Passwords are stored in plain text for simplicity. In a real-world application, use `bcrypt` for hashing.
- This project uses a mock database. Integrate with a real DB (e.g., MongoDB, PostgreSQL) in production.

## Author

### Odogwu Kelly

**Backend Developer** – SimpliRide Tech Internship Candidate
