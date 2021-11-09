const { Transactions } = require('../../models/transactions');

const add = async (req, res, next) => {
  const result = await Transactions.create(req.body);
  res.status(201).json({ result });
};

module.exports = add;
