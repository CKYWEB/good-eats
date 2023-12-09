import {RECIPE_PATH, USER_TOKEN_NAME} from "@/api/config";
import Cookies from "js-cookie";

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

export const addRecipe = async (payload) => {
  const res = await fetch(`${RECIPE_PATH}/createRecipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${Cookies.get(USER_TOKEN_NAME)}`,
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};

export const updateRecipe = async (payload) => {
  const res = await fetch(`${RECIPE_PATH}/updateRecipe`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${Cookies.get(USER_TOKEN_NAME)}`,
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};