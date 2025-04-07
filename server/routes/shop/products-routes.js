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
 *     summary: 获取筛选后的商品列表
 *     tags:
 *       - Shop Products
 *     responses:
 *       200:
 *         description: 成功返回商品列表
 */
router.get("/get", getFilteredProducts);

router.get("/get/:id", getProductDetails);

module.exports = router;
