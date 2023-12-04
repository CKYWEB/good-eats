const { createRecipe, getAllRecipes, getRecipe } = require("../controllers/recipe");
const express = require("express");
const router = express.Router();

router.post("/createRecipe", createRecipe);
router.get("/getAllRecipes", getAllRecipes);
router.get("/getRecipe", getRecipe);

module.exports = router;