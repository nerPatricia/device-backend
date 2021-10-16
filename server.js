const express = require("express");
const cors = require("cors");
const requireDir = require("require-dir");
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", require("./routes"));

app.listen(3000, () => {
  console.log('Connected to 3000');
});
