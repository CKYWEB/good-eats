import { RECIPE_PATH } from "@/api/config";

export const getRecipe = async (recipeId) => {
  const res = await fetch(`${RECIPE_PATH}/getRecipe?recipeId=${recipeId}`);

  return res.json();

};

export const getAllRecipes = async () => {
  const res = await fetch(`${RECIPE_PATH}/getAllRecipes`);

  return res.json();

};

export const getAuthorRecipe = async (authorId) => {
  const res = await fetch(`${RECIPE_PATH}/getAuthorRecipe?authorId=${authorId}`);

  return res.json();

};