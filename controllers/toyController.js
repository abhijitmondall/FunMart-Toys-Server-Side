const Toy = require('../models/toyModel');

exports.getAllToys = async (req, res, next) => {
  const toys = await Toy.find();
  res.status(200).json({
    status: 'success',
    data: 'hello from server side',
  });
};
