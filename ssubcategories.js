const express = require("express");
const router = express.Router();
const SsubcategoriesController = require('../controllers/ssubcategories');
const checkAuth = require('../middleware/check-auth');


router.get("/",checkAuth, SsubcategoriesController.ssubcategories_get_all);

router.post("/", checkAuth,SsubcategoriesController.ssubcategories_create_ssubcategorie);

router.get("/:ssubcategorieId", SsubcategoriesController.ssubcategories_get_ssubcategorie);


router.delete("/:ssubcategorieId", checkAuth, SsubcategoriesController.ssubcategories_delete_ssubcategorie);





module.exports = router;