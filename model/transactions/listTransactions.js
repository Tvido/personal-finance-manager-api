const { Transactions } = require('../../models/transactions');

const listTransactions = async () => {
  return await Transactions.find();
};

module.exports = listTransactions;
