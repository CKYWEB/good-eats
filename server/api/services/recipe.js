const Recipe = require("../models/recipe");


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

const handleFindRecipeByTitle = async (title) => {

  const result = await Recipe.findOne({ title });
  return result;
};

module.exports = {
  handleCreateRecipe,
  handleFindAllRecipes,
  handleFindRecipeByTitle,
};