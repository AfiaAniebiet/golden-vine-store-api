//Importing libraries
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

//Importing controllers

//Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//Routes
const {MONGODB_CONNECTION} = require("./db/connect");

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
