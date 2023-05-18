const toyController = require('./../controllers/toyController');

const express = require('express');
const router = express.Router();

router.route('/').get(toyController.getAllToys).post(toyController.createToy);

router.route('/:id').get(toyController.getToy);

module.exports = router;
