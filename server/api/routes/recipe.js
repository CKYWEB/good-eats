const { createRecipe, getAllRecipes, getRecipe, saveRecipe, getSavedRecipe, getAuthorRecipe, deleteRecipe } = require("../controllers/recipe");

const express = require("express");
const router = express.Router();

router.post("/createRecipe", createRecipe);
router.get("/getAllRecipes", getAllRecipes);
router.get("/getRecipe", getRecipe);
router.get("/getAuthorRecipe", getAuthorRecipe);
router.post("/saveRecipe", saveRecipe);
router.get("/getSavedRecipe", getSavedRecipe);
router.post("/addRecipe", createRecipe);
router.delete("/deleteRecipe", deleteRecipe);

module.exports = router;