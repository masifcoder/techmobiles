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

    // console.log(req.body);
    // return;


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
      products: products
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

// GET /products with filters
const filterProducts = async (req, res) => {
  const { minPrice, maxPrice, brand, ram, storage } = req.query;

  let filter = {};

  if (minPrice && maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  if (brand) {
    const brands = brand.split(',');
    filter.brand = { $in: brands };
  }
  // Handle multiple RAM options
  if (ram) {
    const rams = ram.split(',');
    filter.ram = { $in: rams };
  }
  if (storage) {
    const storages = storage.split(',');
    filter.storage = { $in: storages };
  }

  // console.log(filter);

  // return;

  try {
    const products = await Product.find(filter);
    return res.status(200).json({
      success: true,
      products: products
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  filterProducts
}; 