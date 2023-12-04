const { handleCreateRecipe, handleFindAllRecipes, handleGetRecipe } = require("../services/recipe");

const createRecipe = async (req, res) => {
  try {
    const result = await handleCreateRecipe(req.body);

    res.status(200).json({
      msg: "Recipe is created successfully.",
      data: result,
      result: true,
    });
  } catch (err) {
    res.status(403).json({
      msg: err.message,
      result: false,
    });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const result = await handleFindAllRecipes(req.query);

    res.status(200).json({
      data: result,
      result: true,
    });
  } catch (err) {
    res.status(403).json({
      msg: err.message,
      result: false,
    });
  }
};

const getRecipe = async (req, res) => {
  try {
    const result = await handleGetRecipe(req.query?.recipeId);

    res.status(200).json({
      data: result,
      result: true,
    });
  } catch (err) {
    res.status(403).json({
      msg: err.message,
      result: false,
    });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipe,
};