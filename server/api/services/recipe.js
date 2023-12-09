const Recipe = require("../models/recipe");
const User = require("../models/user");
const { handleGetUserInfo } = require("../services/user");
const { generateMongoId } = require("../utils");

const handleCreateRecipe = async (payload) => {
  // TODO: validation

  return Recipe.create({
    image: payload.image,
    title: payload.title,
    tag: payload.tag,
    description: payload.description,
    authorId: payload.authorId,
    time: payload.time,
    ingredients: payload.ingredients,
    directions: payload.directions,
  });
};

const handleFindAllRecipes = async (payload) => {

  const result = await Recipe.find(payload);

  return result;
};

const handleGetRecipe = async (recipeId) => {
  const result = await Recipe.findById(generateMongoId(recipeId));

  if (!result) {
    throw new Error("Recipe not found");
  }
  return result;
};

const handleGetAuthorRecipe = async (authorId) => {
  const result = await Recipe.find({ authorId: authorId });

  if (!result) {
    throw new Error("Recipe not found");
  }
  return result;
};

const handleSaveRecipe = async (req) => {

  const payload = req.body;
  const { id } = payload;
  const user = await handleGetUserInfo(req);

  const { email, savedRecipes } = user;

  const savedRecipesArr = savedRecipes.split(",");
  if (!savedRecipesArr.includes(id)) {
    savedRecipesArr.push(id);
  }
  const updatedSavedRecipes = savedRecipesArr.join(",");

  await User.updateOne({ email }, {
    savedRecipes: updatedSavedRecipes,
  });
};

const handleGetSavedRecipe = async (req) => {
  const user = await handleGetUserInfo(req);
  const { savedRecipes } = user;

  if (!savedRecipes) {
    return [];
  }

  const ids = savedRecipes.split(",");

  return Recipe.find({
    "_id": {
      $in: ids,
    }
  });
};

module.exports = {
  handleCreateRecipe,
  handleFindAllRecipes,
  handleGetRecipe,
  handleGetAuthorRecipe,
  handleSaveRecipe,
  handleGetSavedRecipe,
};