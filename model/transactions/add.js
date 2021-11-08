const { v4 } = require("uuid");

const listTransactions = require("./listTransactions");
const updateTransactions = require("./updateTransactions");

const add = async (body) => {
  try {
    const newTransaction = { ...body, id: v4() };
    const transactions = await listTransactions();
    transactions.push(newTransaction);
    await updateTransactions(transactions);
    return newTransaction;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
