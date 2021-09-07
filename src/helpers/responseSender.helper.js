module.exports = {
  sendErrorResponse: (res, err, code) => {
    if (!code) {
      code = 400;
    }
    if (!err) {
      err = "Some unexpected error occurred";
    }
    return res.status(code).send({
      status: false,
      message: err,
      errors: [err],
    });
  },
  sendValidationError: (res, errors) => {
    return res.status(422).send({
      status: false,
      message: "Validation Failed",
      errors: Array.isArray(errors) ? errors : ["Validation Failed"],
    });
  },
  sendSuccessResponse: (res, data, msg, code) => {
    if (!code) {
      code = 200;
    }
    return res.status(code).send({
      status: true,
      message: msg ?? "API successfully executed",
      data: data ?? null,
    });
  },
};
