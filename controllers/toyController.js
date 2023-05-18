const Toy = require('../models/toyModel');
const ApiFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const getReqBodyData = (req) => {
  return {
    toyPicture: req.body.toyPicture,
    toyName: req.body.toyName,
    sellerName: req.body.sellerName,
    sellerEmail: req.body.sellerEmail,
    subCategory: req.body.subCategory,
    price: req.body.price,
    ratings: req.body.ratings,
    availableQuantity: req.body.availableQuantity,
    description: req.body.description,
  };
};

// Get All Toys With Query
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

// Get Toy By IDs
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

// Create Toy
exports.createToy = catchAsync(async (req, res, next) => {
  const newToy = await Toy.create(getReqBodyData(req));

  res.status(201).json({
    status: 'success',
    toy: newToy,
  });
});

// Update Toy
exports.updateToy = catchAsync(async (req, res, next) => {
  const toy = await Toy.findByIdAndUpdate(req.params.id, getReqBodyData(req), {
    new: true,
    runValidators: true,
  });

  if (!toy)
    return next(
      new AppError(`No toy found with this ID: ${req.params.id}`, 404)
    );

  res.status(200).json({
    status: 'success',
    toy,
  });
});

// Delete Toy
exports.deleteToy = catchAsync(async (req, res, next) => {
  const toy = await Toy.findByIdAndDelete(req.params.id);

  if (!toy) {
    return next(
      new AppError(`No toy found with this ID: ${req.params.id}`, 404)
    );
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
