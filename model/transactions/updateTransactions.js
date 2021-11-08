const fs = require("fs/promises");

const filePath = require("./filePath");

const updateTransactions = async (newTransactions) => {
  const contuctsString = JSON.stringify(newTransactions);
  await fs.writeFile(filePath, contuctsString);
};

module.exports = updateTransactions;
