function asyncHandler(handler) {
  //Single generic try catch that will wrap each request and handle all types of errors in it, it will avoid try catch in business logic
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
}

module.exports = asyncHandler;
