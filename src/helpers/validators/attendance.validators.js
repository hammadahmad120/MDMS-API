const Joi = require("joi");
module.exports = {
  markAttendanceSchema: Joi.object({
    markTime: Joi.string()
      .required()
      .regex(/\b((1[0-2]|0?[0-9]):([0-5][0-9]) ([AaPp][Mm]))/),
    name: Joi.string().required(),
  }),
};
