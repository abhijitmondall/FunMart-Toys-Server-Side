const Toy = require('../models/toyModel');
const ApiFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllToys = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Toy.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const toys = await features.query;

  res.status(200).json({
    status: 'success',
    results: toys.length,
    toys,
  });
});

exports.getToy = catchAsync(async (req, res, next) => {
  const toy = await Toy.findById(req.params.id);

  if (!toy)
    return next(
      new AppError(`No toy found with this ID: ${req.params.id}`, 404)
    );

  res.status(200).json({
    status: 'success',
    toy,
  });
});

exports.createToy = catchAsync(async (req, res, next) => {
  const newToy = await Toy.create({
    toyPicture: req.body.toyPicture,
    toyName: req.body.toyName,
    sellerName: req.body.sellerName,
    sellerEmail: req.body.sellerEmail,
    subCategory: req.body.subCategory,
    price: req.body.price,
    ratings: req.body.ratings,
    availableQuantity: req.body.availableQuantity,
    description: req.body.description,
  });

  res.status(201).json({
    status: 'success',
    toy: newToy,
  });
});
