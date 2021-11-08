const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const transactionsRouter = require("./routes/api/transactions");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, _, res, next) => {
  res.status(500).json({ message: error.message });
});

module.exports = app;
