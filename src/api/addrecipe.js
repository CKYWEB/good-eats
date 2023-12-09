import { RECIPE_PATH, USER_TOKEN_NAME } from "@/api/config";
import Cookies from "js-cookie";

export const addRecipe = async (payload) => {
  const res = await fetch(`${RECIPE_PATH}/createRecipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${Cookies.get(USER_TOKEN_NAME)}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!data.result) {
    throw new Error(data.msg);
  }

  return data;
};
