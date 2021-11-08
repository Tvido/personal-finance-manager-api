const updateTransactions = require("./updateTransactions");
const listTransactions = require("./listTransactions");

const del = async (transactionId) => {
  try {
    const transactions = await listTransactions();
    const indx = transactions.findIndex(
      (item) => String(item.id) === String(transactionId)
    );
    if (indx === -1) {
      return null;
    }
    const newTransactions = transactions.filter(
      (item) => String(item.id) !== String(transactionId)
    );
    await updateTransactions(newTransactions);
    return transactions[indx];
  } catch (error) {
    throw error;
  }
};

module.exports = del;
