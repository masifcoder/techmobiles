const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [3, 'Product name must be at least 3 characters long']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  discounted_price: {
    type: Number,
    min: [0, 'Discounted price cannot be negative'],
    validate: {
      validator: function (value) {
        return value <= this.price;
      },
      message: 'Discounted price must be less than or equal to regular price'
    },
    default: 0
  },
  inStock: {
    type: Boolean,
    default: true
  },
  ram: {
    type: String,
    required: [true, 'RAM specification is required'],
  },
  screensize: {
    type: String,
    required: [true, 'Screen size is required'],
  },
  storage: {
    type: String,
    required: [true, 'Storage capacity is required'],
  },
  cameraPixels: {
    type: String,
    required: [true, 'Camera specification is required']
  },
  model: {
    type: String,
    required: [true, 'Model name is required'],
    trim: true
  },
  brand: {
    type: String,
    required: [true, 'Brand name is required'],
    trim: true
  },
  images: {
    type: [String],
    required: [true, "Images are required"]
  },
  description: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Add index for better search performance
// productSchema.index({ name: 1, brand: 1, model: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
