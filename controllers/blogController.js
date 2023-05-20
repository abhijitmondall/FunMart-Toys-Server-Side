const Blog = require('../models/blogModel');
const catchAsync = require('../utils/catchAsync');

// Get All Blogs
exports.getAllBlogs = catchAsync(async (req, res, next) => {
  const blogs = await Blog.find({}).select('-__v');

  res.status(200).json({
    status: 'success',
    results: blogs.length,
    blogs,
  });
});

exports.createBlog = catchAsync(async (req, res, next) => {
  const blogs = await Blog.create(req.body);

  res.status(200).json({
    status: 'success',
    results: blogs.length,
    blogs,
  });
});
