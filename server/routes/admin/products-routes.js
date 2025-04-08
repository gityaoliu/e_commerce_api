const express = require("express");

const {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../../controllers/admin/products-controller");

const { upload } = require("../../helpers/cloudinary");

const router = express.Router();
/**
 * @swagger
 * /api/common/feature/upload-image:
 *   post:
 *     summary: Upload an image to Cloudinary
 *     tags:
 *       - Common Features
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               my_file:
 *                 type: string
 *                 format: binary
 *                 description: The image file to upload
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 */

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
/**
 * @swagger
 * /api/admin/products/add:
 *   post:
 *     summary: Add a new product
 *     tags:
 *       - Admin Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created successfully
 */

router.post("/add", addProduct);
/**
 * @swagger
 * /api/admin/products/edit/{id}:
 *   put:
 *     summary: Edit an existing product
 *     tags:
 *       - Admin Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to edit
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully
 */

router.put("/edit/:id", editProduct);
/**
 * @swagger
 * /api/admin/products/delete/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags:
 *       - Admin Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */

router.delete("/delete/:id", deleteProduct);
/**
 * @swagger
 * /api/admin/products/get:
 *   get:
 *     summary: Fetch all products
 *     tags:
 *       - Admin Products
 *     responses:
 *       200:
 *         description: Successfully fetched all products
 */

router.get("/get", fetchAllProducts);

module.exports = router;
