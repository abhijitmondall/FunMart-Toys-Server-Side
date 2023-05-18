const toyController = require('./../controllers/toyController');

const express = require('express');
const router = express.Router();

router.route('/').get(toyController.getAllToys).post(toyController.createToy);

router
  .route('/:id')
  .get(toyController.getToy)
  .patch(toyController.updateToy)
  .delete(toyController.deleteToy);

module.exports = router;
