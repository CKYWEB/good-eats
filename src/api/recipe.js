import { RECIPE_PATH } from "@/api/config";
import { USER_TOKEN_NAME } from "@/api/config";
import Cookies from "js-cookie";

export const getRecipe = async (recipeId) => {
  const res = await fetch(`${RECIPE_PATH}/getRecipe?recipeId=${recipeId}`);

  return res.json();

};

export const getAllRecipes = async () => {
  const res = await fetch(`${RECIPE_PATH}/getAllRecipes`);

  return res.json();

};

export const saveRecipe = async (payload) => {
  const res = await fetch(`${RECIPE_PATH}/saveRecipe`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${Cookies.get(USER_TOKEN_NAME)}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),

  });

  return res.json();

};

export const getSavedRecipe = async () => {
  const res = await fetch(`${RECIPE_PATH}/getSavedRecipe`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${Cookies.get(USER_TOKEN_NAME)}`,
      "Content-Type": "application/json",
    },

  });

  return res.json();

};