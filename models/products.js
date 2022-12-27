const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Please provide the name of product"]
    },
    productPrice: {
        type: Number,
        required: [true, "Provide the price of the product"]
    },
    featuredProduct: {
        type: Boolean,
        default: false
    },
    productRating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    category: {
        type: String,
        enum: {
            values: ["Clothing", "Shoes", "Wristwatches", "Others"],
            message: "{VALUE} is not in the list"
        }
        //enum: ["Clothing", "Shoes", "Wristwatches", "Others"]
    }
});

module.exports = mongoose.model("Product", productSchema);