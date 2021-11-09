// const { Transactions } = require('../../models/transactions');

// const add = async (req, res, next) => {
//   const result = await Transactions.create(req.body);
//   res.status(201).json({ result });

// try {
//   const { error } = Transactions.validate(req.body);
//   if (error) {
//     return res.status(400).json({
//       message: 'Missing required name field',
//     });
//   }

//   const newTransaction = await Transactions.add(req.body);
//   res.status(201).json({ newTransaction });
// } catch (error) {
//   next(error);
// }
// };

const Transactions = require('../../model/transactions');

const { joiTransactionSchema } = require('../../validation');

const add = async (req, res, next) => {
  try {
    const { error } = joiTransactionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: 'Missing required name field',
      });
    }

    const newTransaction = await Transactions.add(req.body);
    res.status(201).json({ newTransaction });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
