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
      validator: function(value) {
        return value <= this.price;
      },
      message: 'Discounted price must be less than or equal to regular price'
    }
  },
  inStock: {
    type: Boolean,
    default: true
  },
  ram: {
    type: Number,
    required: [true, 'RAM specification is required'],
    enum: {
      values: [2, 3, 4, 6, 8, 12, 16, 32, 64, 128, 256, 512],
      message: 'Please specify a valid RAM size in GB'
    }
  },
  screensize: {
    type: Number,
    required: [true, 'Screen size is required'],
    min: [3, 'Screen size must be at least 3 inches'],
    max: [9, 'Screen size must be less than 9 inches']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['smartphone', 'tablet', 'feature phone'],
      message: 'Please specify a valid device category'
    }
  },
  storage: {
    type: Number,
    required: [true, 'Storage capacity is required'],
    enum: {
      values: [16, 32, 64, 128, 256, 512, 1024],
      message: 'Please specify a valid storage capacity in GB'
    }
  },
  cameraPixels: {
    type: Number,
    required: [true, 'Camera specification is required'],
    min: [2, 'Camera must be at least 2MP']
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
  }
}, {
  timestamps: true
});

// Add index for better search performance
// productSchema.index({ name: 1, brand: 1, model: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
