const transactionsOperations = require("../../model/transactions");

const getById = async (req, res, next) => {
  try {
    const { transactionId } = req.params;
    const transaction = await transactionsOperations.getById(transactionId);
    if (!transaction) {
      res.status(404).json({ message: "Not found" });
    }

    res.json({
      transaction,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
