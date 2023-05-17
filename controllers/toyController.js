const Toy = require('../models/toyModel');

exports.getAllToys = async (req, res, next) => {
  const toys = await Toy.find().select('-__v');
  res.status(200).json({
    status: 'success',
    toys,
  });
};
