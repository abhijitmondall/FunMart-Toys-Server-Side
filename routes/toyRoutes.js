const toyController = require('./../controllers/toyController');

const express = require('express');
const router = express.Router();

router.route('/').get(toyController.getAllToys);

module.exports = router;
