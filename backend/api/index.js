const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');
const orderRouter = require('./routes/order.routes');
const dashboardRouter = require('./routes/admin/dashboard.routes');

// Load environment variables
dotenv.config();

const app = express();
// const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});


// Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use("/api/order", orderRouter);

// dashboard routes
app.use("/api/admin", dashboardRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server after successful database connection
    // app.listen(port, () => {
    //   console.log(`Server is running on port ${port}`);
    // });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

  module.exports = app;