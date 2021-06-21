const express = require("express");
const router = express.Router();
const ProductsController = require('../controllers/products');
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');





router.get("/",checkAuth, ProductsController.products_get_all);

router.post("/",checkAuth, ProductsController.products_create_product);

router.get("/:productId", ProductsController.products_get_product);


router.delete("/:productId",checkAuth,  ProductsController.products_delete);

module.exports = router; 