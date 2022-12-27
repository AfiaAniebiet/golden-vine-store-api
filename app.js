//Importing libraries
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
require("express-async-errors");
const app = express();

//Importing controllers
const {MONGODB_CONNECTION} = require("./db/connect");
const {errorHandler} = require("./middleware/404Error");
const {errorHandlerMiddleware} = require("./middleware/errorHandler");
const productsRoute = require("./routes/products");

//Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use("/api/v1/products", productsRoute);
app.use(errorHandler);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    MONGODB_CONNECTION(process.env.MONGODB_URI);
    app.listen(PORT, console.log(`Server is running on Port: ${PORT}`));
  }catch (e) {
    console.log(e);
  }
}

startServer();
