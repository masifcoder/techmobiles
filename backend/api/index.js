const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const userRouter = require('../routes/user.routes');
const productRouter = require('../routes/product.routes');
const orderRouter = require('../routes/order.routes');
const dashboardRouter = require('../routes/admin/dashboard.routes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/data', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.get('/api/mydata', (req, res) => {
  res.json({ message: 'Welcome to the API my data' });
});

// Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/admin', dashboardRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

// ✅ Export the Express app as a Serverless Function for Vercel
module.exports = app;
