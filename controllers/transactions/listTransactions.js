const transactionsOperations = require("../../model/transactions");

const listTransactions = async (__, res, next) => {
  try {
    const transactions = await transactionsOperations.listTransactions({});
    res.json({
      transactions,
    });
    res.json({
      status: "success",
      code: 200,
      data: {
        result: transactions,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = listTransactions;
