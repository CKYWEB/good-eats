const Recipe = require("../models/recipe");
const { createDbConnection, closeDbConnection } = require("../utils");


const handleCreateRecipe = async (payload) => {
  // TODO: validation

  await createDbConnection();

  await Recipe.create({
    image: String,
    // base64
    title: payload.title,
    tag: payload.title,
    description: payload.description,
    author: payload.author,
    prepTime: payload.prepTime,
    cookTime: payload.cookTime,
    totalTime: payload.totalTime,
    ingredients: payload.ingredients,
    directons: payload.directions,
    // array
  });
  const result = await Recipe.find({ title: payload.title });

  await closeDbConnection();

  return result;
};

const handleFindAllRecipes = async (payload) => {
  await createDbConnection();

  const result = await Recipe.find(payload);

  await closeDbConnection();

  return result;
};

module.exports = {
  handleCreateRecipe,
  handleFindAllRecipes,
};