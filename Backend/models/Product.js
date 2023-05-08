const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "required"]
  },
  description: {
    type: String,
    required: [true, "required"]
  },
  price: {
    type: String,
    required: [true, "required"]
  },
  category: {
    type: String,
    required: [true, "required"]
  },
  pictures: {
    type: Array,
    required: true
  }
}, {minimize: false});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
