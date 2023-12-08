import { USER_PATH, USER_TOKEN_NAME } from "@/api/config";
import Cookies from "js-cookie";

export const changePassword = async (payload) => {
  const res = await fetch(`${USER_PATH}/changePassword`, {
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
