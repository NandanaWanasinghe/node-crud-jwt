const mongoose = require("mongoose");

const URL = process.env.MONGO_URI;
const connection = async () => {
  await mongoose
    .connect(URL)
    .then(() => {
      console.log("DATABASE CONNECTED..!");
    })
    .catch((e) => {
      console.log("DATABASE CONNECTION ERROR : " + e);
    });
};

module.exports = connection;
