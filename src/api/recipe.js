import { RECIPE_PATH } from "@/api/config";

export const getRecipe = async (recipeId) => {
  const res = await fetch(`${RECIPE_PATH}/getRecipe?recipeId=${recipeId}`);

  return res.json();

};