const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

/**
 * @route GET /api/products
 * @desc GET all products from db
 * @access Public
 */
router.get("/", getAllProducts);

/**
 * @route GET /api/products/:id
 * @desc GET a product by id from db
 * @access Public
 */
router.get("/:id", getProductById);

module.exports = router;
