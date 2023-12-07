const Recipe = require("../models/recipe");
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

const handleGetAuthorRecipe = async (authorId) => {
  const result = await Recipe.find({ authorId: authorId });

  if (!result) {
    throw new Error("Recipe not found");
  }
  return result;
};

module.exports = {
  handleCreateRecipe,
  handleFindAllRecipes,
  handleGetRecipe,
  handleGetAuthorRecipe,
};