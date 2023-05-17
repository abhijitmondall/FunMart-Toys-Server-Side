const toyController = require('./../controllers/toyController');

const express = require('express');
const router = express.Router();

router.route('/').get(toyController.getAllToys);

router.route('/:id').get(toyController.getToy);

module.exports = router;
