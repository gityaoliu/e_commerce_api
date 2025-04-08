const express = require("express");

const {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} = require("../../controllers/admin/order-controller");

const router = express.Router();
/**
 * @swagger
 * /api/admin/orders/get:
 *   get:
 *     summary: Get all orders from all users
 *     tags:
 *       - Admin Orders
 *     responses:
 *       200:
 *         description: Successfully retrieved all orders
 */

router.get("/get", getAllOrdersOfAllUsers);
/**
 * @swagger
 * /api/admin/orders/details/{id}:
 *   get:
 *     summary: Get order details by ID (Admin)
 *     tags:
 *       - Admin Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved order details
 */

router.get("/details/:id", getOrderDetailsForAdmin);
/**
 * @swagger
 * /api/admin/orders/update/{id}:
 *   put:
 *     summary: Update order status by ID (Admin)
 *     tags:
 *       - Admin Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: New status of the order
 *     responses:
 *       200:
 *         description: Order status updated successfully
 */

router.put("/update/:id", updateOrderStatus);

module.exports = router;
