// const fs = require('fs/promises');

const transactions = require('../../models/transactions');

// const filePath = require("./filePath");

// const getWallets = async (id) => {
//   return await Wallet.find({ user: id });
// };

const listTransactions = async () => {
  return await transactions.find();
};

module.exports = listTransactions;
