const express = require("express");
const router = express.Router();
const { createRecipe } = require("../controllers/recipe");
const { authMiddleware } = require("../middleware");

router.use(authMiddleware);

router.post("/addRecipe", createRecipe);

module.exports = router;
