// const fs = require("fs/promises");
const transactions = require("./transactions.json");

const listTransactions = async () => {
  return transactions;
};

const getTransactionById = async (transactionId) => {};

const removeTransaction = async (transactionId) => {};

const addTransaction = async (body) => {};

const updateTransaction = async (transactionId, body) => {};

module.exports = {
  listTransactions,
  getTransactionById,
  removeTransaction,
  addTransaction,
  updateTransaction,
};
