const express = require("express");
const router = express.Router();
const SubcategoriesController = require('../controllers/subcategories');
const checkAuth = require('../middleware/check-auth');



router.get("/",checkAuth, SubcategoriesController.subcategories_get_all);

router.post("/",checkAuth, SubcategoriesController.subcategories_create_subcategorie);

router.get("/:subcategorieId", SubcategoriesController.subcategories_get_subcategorie);


router.delete("/:subcategorieId",checkAuth,  SubcategoriesController.subcategories_delete_subcategorie);





module.exports = router;