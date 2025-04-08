const express = require("express");

const {
  getFilteredProducts,
  getProductDetails,
} = require("../../controllers/shop/products-controller");

const router = express.Router();
/**
 * @swagger
 * /api/shop/products/get:
 *   get:
 *     summary: Get filtered product list
 *     tags:
 *       - Shop Products
 *     responses:
 *       200:
 *         description: Successfully returns product list
 */
router.get("/get", getFilteredProducts);
/**
 * @swagger
 * /api/shop/products/get/{id}:
 *   get:
 *     summary: Get product details by ID
 *     tags:
 *       - Shop Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to retrieve
 *     responses:
 *       200:
 *         description: Successfully returns product details
 *       404:
 *         description: Product not found
 */
router.get("/get/:id", getProductDetails);

module.exports = router;
