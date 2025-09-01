const express = require("express");
const router = express.Router();
const { deleteProduct } = require("../controllers/deleteProduct");
const { addProduct } = require("../controllers/addProduct");
const { getProducts } = require("../controllers/getProducts");

router.get("/api/getItem", getProducts);
router.post("/api/addItem", addProduct);
router.put("/delete/:id", deleteProduct);

module.exports = router;