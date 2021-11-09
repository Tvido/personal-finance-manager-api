// const fs = require('fs/promises');

const transactions = require('../../models/transactions');

// const filePath = require("./filePath");

// const getWallets = async (id) => {
//   return await Wallet.find({ user: id });
// };

const listTransactions = async () => {
  try {
    return await transactions.find();
  } catch (err) {
    throw err;
  }
};

module.exports = listTransactions;
