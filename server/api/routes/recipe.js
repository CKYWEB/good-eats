const { createRecipe, getAllRecipes, getRecipeByTitle } = require("../controllers/recipe");
const express = require("express");
const router = express.Router();

router.post("/createRecipe", createRecipe);
router.get("/getAllRecipes", getAllRecipes);
router.get("/getRecipeByTitle", getRecipeByTitle);

module.exports = router;