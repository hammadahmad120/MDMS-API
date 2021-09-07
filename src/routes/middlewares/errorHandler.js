const responseSender = require("../../helpers/responseSender.helper");
const logger = require("../../helpers/logger.helper");

function errorHandler(err, req, res, next) {
  //all 500, db validations and bad request errors will come here

  if (!err.code && err.name !== "ValidationError") {
    logger.error(err.message, err);
  }

  if (err.name === "ValidationError" && err.errors) {
    const errMsgs = Object.keys(err.errors).map((errKey) => {
      return (
        err.errors[errKey]?.properties?.message ?? "Some validation failed"
      );
    });
    return responseSender.sendValidationError(res, errMsgs);
  } else
    return responseSender.sendErrorResponse(res, err.message, err.code ?? 500);
}

module.exports = errorHandler;
