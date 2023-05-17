exports.getAllToys = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: 'hello from server side',
  });
};
