module.exports = (data, dataSchema, abortOnFirstError = false) => {
  //generic request data validator to validate data based on provided schema
  const validationRslt = dataSchema.validate(data, {
    abortEarly: abortOnFirstError,
  });
  if (validationRslt.error) {
    if (
      Array.isArray(validationRslt.error.details) &&
      validationRslt.error.details.length
    ) {
      return validationRslt.error.details.map((err) => err.message);
    } else {
      return ["Some validation failed"];
    }
  } else return null;
};
