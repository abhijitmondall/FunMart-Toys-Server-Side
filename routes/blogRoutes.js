const blogController = require('./../controllers/blogController');

const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);

module.exports = router;
