const Joi = require("joi");
module.exports = {
  donationSchema: Joi.object({
    amount: Joi.number().required(),
    description: Joi.string(),
    donationBy: Joi.number().required(),
  }),
  donerSchema: Joi.object({
    cnic: Joi.string().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    gender: Joi.string().required(),
    address: Joi.optional(),
    company: Joi.optional(),
  }),
};
