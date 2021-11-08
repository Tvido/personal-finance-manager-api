const { Schema, model } = require("mongoose");
const Joi = require("joi");

const transactionsSchema = Schema(
  {
    category: {
      type: String,
      default: null,
      minlength: 2,
    },
    operationType: {
      type: String,
      default: null,
      minlength: 2,
    },
    amount: {
      type: Number,
      default: null,
    },
    datetime: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
      minlength: 2,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  category: Joi.string().min(2).required(),
  operationType: Joi.string().min(2).required(),
  amount: Joi.number().required(),
  datetime: Joi.string().required(),
  description: Joi.string().min(2).required(),
});

const Transactions = model("transactions", transactionsSchema);

module.exports = { Transactions, joiSchema };
