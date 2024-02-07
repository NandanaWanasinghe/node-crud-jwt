const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("express-async-errors");
const constant = require("./constants");
const connection = require("./util/connection");
const errorHandlerMiddleware = require("./errors/error.middleware");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//import Route files
const UserRouter = require("./routes/user.route");
const ProductRouter = require("./routes/product.route");

//Use Route
app.use(constant.API.PREFIX.concat("/user"), UserRouter);
app.use(constant.API.PREFIX.concat("/product"), ProductRouter);

//error handle middleware
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`SERVER LISTEN ON PORT ${PORT}..!`);
  connection();
});
