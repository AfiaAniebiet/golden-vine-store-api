require("dotenv").config();

const Product = require("./models/products");
const jsonProducts = require("./products.json");
const {MONGODB_CONNECTION} = require("./db/connect");


const start = async () => {
    try {
        await MONGODB_CONNECTION(process.env.MONGODB_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("Success");
        process.exit(0);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

start();