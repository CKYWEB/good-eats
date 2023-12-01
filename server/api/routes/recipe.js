const { createRecipe, getAllRecipes } = require("../controllers/recipe");
const express = require("express");
const router = express.Router();

router.post("/createRecipe", createRecipe);
router.get("/getAllRecipes", getAllRecipes);

module.exports = router;