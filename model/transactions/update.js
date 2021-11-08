const updateTransactions = require("./updateTransactions");
const listTransactions = require("./listTransactions");

const update = async (transactionId, body) => {
  try {
    const transactions = await listTransactions();
    const idx = transactions.findIndex(
      (item) => String(item.id) === String(transactionId)
    );
    if (idx === -1) {
      return null;
    }
    transactions[idx] = { ...transactions[idx], ...body };
    await updateTransactions(transactions);
    return transactions[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;
