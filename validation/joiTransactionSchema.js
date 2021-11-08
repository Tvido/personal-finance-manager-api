const Joi = require("joi");

const joiTransactionSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string().pattern(new RegExp("^[0-9]{3}-[0-9]{2}-[0-9]{2}$")),
});

module.exports = joiTransactionSchema;
