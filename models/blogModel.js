const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  question: String,

  answer: String,

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
