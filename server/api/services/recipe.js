const Recipe = require("../models/recipe");
const User = require("../models/user");
const { handleGetUserInfo } = require("../services/user");
const { generateMongoId } = require("../utils");

const handleCreateRecipe = async (payload) => {
  // TODO: validation

  await Recipe.create({
    image: payload.image,
    title: payload.title,
    tag: payload.tag,
    description: payload.description,
    author: payload.author,
    time: payload.time,
    ingredients: payload.ingredients,
    directions: payload.directions,
  });
  const result = await Recipe.find({ title: payload.title });

  return result;
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

const handleSaveRecipe = async (req) => {

  const payload = req.body;
  const { recipeId } = payload;
  const user = await handleGetUserInfo(req);

  const { email, savedRecipes } = user;
  // const savedRecipesArr = savedRecipes.split(",");

  // TODO: find if the same
  // 1. savedRecipesArr.push(recipeId)
  // 2. Array to Set
  // 3. Set (no the same item)
  // 4. Set to Array
  // 5. Array to String: array.join(",")

  await User.updateOne({ email }, {
    savedRecipes: savedRecipes === "" ? recipeId : `${savedRecipes},${recipeId}`,
  });
};

const handleGetSavedRecipe = async (req) => {
  const user = await handleGetUserInfo(req);
  const { savedRecipes } = user;

  return savedRecipes;
};

module.exports = {
  handleCreateRecipe,
  handleFindAllRecipes,
  handleGetRecipe,
  handleSaveRecipe,
  handleGetSavedRecipe,
};