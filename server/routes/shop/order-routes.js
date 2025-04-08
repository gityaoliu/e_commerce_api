const express = require("express");

const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
  capturePayment,
} = require("../../controllers/shop/order-controller");

const router = express.Router();
/**
 * @swagger
 * /api/shop/order/create:
 *   post:
 *     summary: Create a new order
 *     tags:
 *       - Shop Orders
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid input or missing data
 */

router.post("/create", createOrder);
/**
 * @swagger
 * /api/shop/order/capture:
 *   post:
 *     summary: Capture a payment for an existing order
 *     tags:
 *       - Shop Orders
 *     responses:
 *       200:
 *         description: Payment captured successfully
 *       400:
 *         description: Failed to capture payment
 */

router.post("/capture", capturePayment);
/**
 * @swagger
 * /api/shop/order/list/{userId}:
 *   get:
 *     summary: Get all orders by a specific user
 *     tags:
 *       - Shop Orders
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: Successfully retrieved user orders
 *       404:
 *         description: Orders not found for the user
 */

router.get("/list/:userId", getAllOrdersByUser);
/**
 * @swagger
 * /api/shop/order/details/{id}:
 *   get:
 *     summary: Get order details by order ID
 *     tags:
 *       - Shop Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the order
 *     responses:
 *       200:
 *         description: Successfully retrieved order details
 *       404:
 *         description: Order not found
 */

router.get("/details/:id", getOrderDetails);

module.exports = router;
