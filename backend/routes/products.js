const express = require("express");
const router = express.Router();
const { deleteProduct } = require("../controllers/deleteProduct");
const { addProduct } = require("../controllers/addProduct");
const { getProducts } = require("../controllers/getProducts");
const { getProductById } = require("../controllers/getProductById");
const { updateProduct } = require("../controllers/updateProduct");

router.get("/api/getItem", getProducts);
router.get("/api/products/:id", getProductById);

router.post("/api/addItem", addProduct);
router.put("/delete/:id", deleteProduct);
router.put("/api/products/:id", updateProduct);

module.exports = router;