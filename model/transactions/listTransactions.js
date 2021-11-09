// const fs = require('fs/promises');

const { Transactions } = require('../../models/transactions');

// const filePath = require("./filePath");

// const getWallets = async (id) => {
//   return await Wallet.find({ user: id });
// };

const listTransactions = async () => {
  return await Transactions.find();
};

module.exports = listTransactions;
