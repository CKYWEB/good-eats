const { createRecipe, getAllRecipes, getRecipe, saveRecipe, getSavedRecipe, getAuthorRecipe, deleteRecipe, updateRecipe } = require("../controllers/recipe");


const express = require("express");
const router = express.Router();

router.post("/createRecipe", createRecipe);
router.get("/getAllRecipes", getAllRecipes);
router.get("/getRecipe", getRecipe);
router.get("/getAuthorRecipe", getAuthorRecipe);
router.post("/saveRecipe", saveRecipe);
router.get("/getSavedRecipe", getSavedRecipe);
router.delete("/deleteRecipe", deleteRecipe);
router.put("/updateRecipe", updateRecipe);

module.exports = router;