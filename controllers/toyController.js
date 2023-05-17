const Toy = require('../models/toyModel');
const ApiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.getAllToys = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Toy.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const toys = await features.query;

  // console.log(req.query);
  res.status(200).json({
    status: 'success',
    results: toys.length,
    toys,
  });
});
