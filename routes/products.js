const express = require("express");
const router = express.Router();

const {getAllProducts, postProduct, updateProduct, deleteProduct, getProduct} = require("../controllers/products");

router.route("/").get(getAllProducts).post(postProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProduct);

module.exports = router;