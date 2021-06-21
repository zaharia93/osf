const express = require("express");
const router = express.Router();
const CategoriesController = require('../controllers/categories');
const checkAuth = require('../middleware/check-auth');

router.get("/",checkAuth, CategoriesController.categories_get_all);

router.post("/",checkAuth, CategoriesController.categories_create_categorie);

router.get("/:categorieId", CategoriesController.categories_get_categorie);


router.delete("/:categorieId", checkAuth, CategoriesController.categories_delete);






module.exports = router;