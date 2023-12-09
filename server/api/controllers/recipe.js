const { handleCreateRecipe, handleFindAllRecipes, handleGetRecipe, handleSaveRecipe, handleGetSavedRecipe, handleGetAuthorRecipe, handleDeleteRecipe } = require("../services/recipe");

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

const getAuthorRecipe = async (req, res) => {
  try {
    const result = await handleGetAuthorRecipe(req.query?.authorId);

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

const saveRecipe = async (req, res) => {
  try {
    await handleSaveRecipe(req);

    res.status(200).json({
      msg: "Recipe saved successfully",
      result: true,
    });
  } catch (err) {
    res.status(403).json({
      msg: err.message,
      result: false,
    });
  }
};

const getSavedRecipe = async (req, res) => {
  try {
    const result = await handleGetSavedRecipe(req);

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

//Add a recipe
const handleAddRecipe = async (req, res) => {
  try {
    const result = await handleCreateRecipe(req.body);

    res.status(200).json({
      msg: "Recipe added successfully.",
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

const deleteRecipe = async (req, res) => {
  try {
    const { recipeId } = req.query;
    await handleDeleteRecipe(recipeId);

    res.status(200).json({
      result: true,
      msg: "Recipe deleted successfully!"
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
  getAuthorRecipe,
  saveRecipe,
  getSavedRecipe,
  handleAddRecipe,
  deleteRecipe,
};