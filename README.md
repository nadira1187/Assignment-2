# E-commerce API

## Introduction

This is a simple E-commerce API built using Express.js, TypeScript, MongoDB, and Mongoose. The API allows you to manage products and orders with full CRUD (Create, Read, Update, Delete) operations. Data validation is handled using Joi.

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (v4.x or later)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd ecommerce-app
2. **Install dependencies:**
npm install
3. **Create a .env file in the root directory with the following content:**
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
4. **Compile TypeScript to JavaScript:**
npx tsc
5. **Run the development server:**
npm run dev
The API will be available at http://localhost:3000.
6. **To run the application in development mode, use:**
npm run dev
7. **To build and run the application in production mode, use:**
npm run build
npm start
