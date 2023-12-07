const { createRecipe, getAllRecipes, getRecipe, getAuthorRecipe } = require("../controllers/recipe");
const express = require("express");
const router = express.Router();

router.post("/createRecipe", createRecipe);
router.get("/getAllRecipes", getAllRecipes);
router.get("/getRecipe", getRecipe);
router.get("/getAuthorRecipe", getAuthorRecipe);

module.exports = router;