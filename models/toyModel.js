const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
  toyPicture: {
    type: String,
  },

  toyName: {
    type: String,
    index: true,
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
    type: Number,
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

  profile: {
    something: String,
    somethingElse: String,
  },
});

toySchema.index({ toyName: 'text', 'profile.something': 'text' });
const Toy = mongoose.model('Toy', toySchema);

module.exports = Toy;
