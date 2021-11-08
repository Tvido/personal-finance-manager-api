const listTransactions = require("./listTransactions");

const getById = async (transactionId) => {
  try {
    const transactions = await listTransactions();
    const selectTransaction = transactions.find(
      (item) => String(item.id) === String(transactionId)
    );
    if (!selectTransaction) {
      return null;
    }
    return selectTransaction;
  } catch (error) {
    throw error;
  }
};

module.exports = getById;
