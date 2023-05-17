const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
  toyPicture: {
    type: String,
  },

  toyName: {
    type: String,
    trim: true,
    required: [true, 'A Toy must have a name!'],
  },

  sellerName: {
    type: String,
  },

  sellerEmail: {
    type: String,
  },

  subCategory: {
    type: String,
    required: [true, 'A Toy must have a category!'],
  },

  price: {
    type: String,
    required: [true, 'A Toy must have a price!'],
  },

  ratings: {
    type: Number,
    default: 4.5,
  },

  availableQuantity: {
    type: String,
  },

  description: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Toy = mongoose.model('Toy', toySchema);

module.exports = Toy;
