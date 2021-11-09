const transactionsOperations = require('../../model/transactions');

const { joiTransactionSchema } = require('../../validation');

const update = async (req, res, next) => {
  try {
    const { error } = joiTransactionSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: error.message,
      });
    }

    const { transactionId } = req.params;
    const updateTransaction = await transactionsOperations.update(
      transactionId,
      req.body,
    );
    if (!req.body) {
      return res.status(404).json({ message: 'missing fields' });
    }
    res.json({ updateTransaction });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
