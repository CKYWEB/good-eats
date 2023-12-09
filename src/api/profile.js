import { PROFILE_PATH } from "@/api/config";
import { USER_TOKEN_NAME } from "@/api/config";
import Cookies from "js-cookie";

export const updateProfile = async (data, profilePicture) => {
  const token = Cookies.get(USER_TOKEN_NAME);

  const formData = new FormData();
  formData.append("profilePicture", profilePicture);

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const res = await fetch(`${PROFILE_PATH}/updateProfile`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    body: formData,
  });

  return res.json();
};