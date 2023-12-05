const { createRecipe, getAllRecipes, getRecipe, saveRecipe } = require("../controllers/recipe");
const express = require("express");
const router = express.Router();

router.post("/createRecipe", createRecipe);
router.get("/getAllRecipes", getAllRecipes);
router.get("/getRecipe", getRecipe);
router.post("/saveRecipe", saveRecipe);

module.exports = router;