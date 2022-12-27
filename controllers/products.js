const Product = require("../models/products");

const getAllProducts = async (req, res, next) => {
    const {featuredProduct, category, productName, sort} = req.query;
    const queryObject = {};

    if(featuredProduct){
        queryObject.featuredProduct = featuredProduct === "true" ? true : false;
    }
    if (category) {
        queryObject.category = category;
    }
    if (productName) {
        queryObject.productName = {$regex: productName, $options: "t"}
    }

    let result = Product.find({queryObject});
    if (sort) {
        const sortList = sort.split(",").join(" ");
        result = result.sort(sortList);
    } else {
        result = result.sort("createdAt");
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
}

const postProduct = async (req, res, next) => {
    res.status(201).json({ msg: "Post created"});
}

const getProduct = async (req, res, next) => {
    res.status(200).json({ msg: "Single Product"});
}

const deleteProduct = async (req, res, next) => {
    res.status(200).json({ msg: "Product Deleted"});
}

const updateProduct = async (req, res, next) => {
    res.status(200).json({ msg: "Product Updated"});
}

module.exports = {
    getAllProducts,
    postProduct,
    deleteProduct,
    getProduct,
    updateProduct
}