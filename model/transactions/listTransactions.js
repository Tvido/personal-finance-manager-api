const fs = require("fs/promises");

const filePath = require("./filePath");

const listTransactions = async () => {
  try {
    const data = await fs.readFile(filePath);
    const transactions = JSON.parse(data);
    return transactions;
  } catch (err) {
    throw err;
  }
};

module.exports = listTransactions;
