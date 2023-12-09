const { handleCreateRecipe, handleFindAllRecipes, handleGetRecipe, handleSaveRecipe, handleGetSavedRecipe, handleGetAuthorRecipe, handleUpdateRecipe } = require("../services/recipe");

const createRecipe = async (req, res) => {
  try {
    const { _id } = req.user;
    const result = await handleCreateRecipe({
      ...req.body,
      authorId: _id,
    });

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

const updateRecipe = async (req, res) => {
  try {
    const result = await handleUpdateRecipe(req);

    res.status(200).json({
      data: result,
      msg: "Recipe has updated successfully",
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
  getAuthorRecipe,
  saveRecipe,
  getSavedRecipe,
  updateRecipe,
};