require("dotenv").config();
const mongoose = require("mongoose");

let MONGODB_URI =
  process.env.MONGODB_CONNECTION_STRING ||
  process.env.MONGODB_RIU ||
  "mongodb://127.0.0.1:27017/TemplateDatabase";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("You're Connected Successfully To MongoDB");
  })
  .catch((e) => {
    console.error("Connection error has occurred", e.message);
  });

const db = mongoose.connection;

module.exports = db;
