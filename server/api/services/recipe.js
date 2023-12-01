const Recipe = require("../models/recipe");
const { createDbConnection, closeDbConnection } = require("../utils");


const handleCreateRecipe = async (payload) => {
  // TODO: validation

  await createDbConnection();

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