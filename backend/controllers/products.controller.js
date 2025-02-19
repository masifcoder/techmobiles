const Product = require('../models/products.model');

// Create a new product using Mongoose create
const createProduct = async (req, res) => {
  try {
    // Check if user is admin
    // if (req.role !== 'admin') {
    //   return res.status(403).json({
    //     success: false,
    //     error: 'Only administrators can create products'
    //   });
    // }
    
    const product = await Product.create(req.body);
    
    return res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    
    return res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  try {
    // Check if user is admin
    if (req.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Only administrators can update products'
      });
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    // Check if user is admin
    if (req.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Only administrators can delete products'
      });
    }

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
}; 