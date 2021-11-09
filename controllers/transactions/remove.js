const { Transactions } = require('../../models/transactions');

const remove = async (req, res, next) => {
  try {
    const { transactionId } = req.params;
    const deleteTransaction = await Transactions.findByIdAndDelete(
      transactionId,
    );

    if (!deleteTransaction) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.json({
      deleteTransaction,
      message: 'transaction deleted',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
