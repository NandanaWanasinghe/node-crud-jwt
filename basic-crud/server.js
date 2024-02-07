const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const constant = require("./constants");

const app = express();
app.use(bodyParser.json());
app.use(cors());
// Body parser middleware that provide fro express
// app.use(express.json())

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_DB_URL;

// import Routes
const StudentRouter = require("./route/student.route");

// use Route
app.use(constant.API.PREFIX.concat("/student"), StudentRouter);

mongoose.set("strictQuery", true);

const connection = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("DATABASE CONNECTED..!");
    })
    .catch((e) => {
      console.log("DATABASE CONNECTION ERROR : " + e);
    });
};

app.listen(PORT, () => {
  console.log(`SERVER LISTEN ON PORT ${PORT}..!`);
  connection();
});
