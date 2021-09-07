const Joi = require("joi");
module.exports = {
  userRequestSchema: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    roleId: Joi.number().integer(),
  }),
  userCredentialsSchema: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })
};
