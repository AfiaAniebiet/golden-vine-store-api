const mongoose = require("mongoose");

const MONGODB_CONNECTION = async (MONGODB_URI) => {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGODB_URI);

    mongoose.connection.on("connected", () => {
        console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", () => {
        console.log("Failed to connect to database", error);
    });
}

module.exports = {
    MONGODB_CONNECTION,
}