import { NEWSLETTER_PATH } from "@/api/config";

// export const getAllSubscribers = async () => {
//   const res = await fetch(`${NEWSLETTER_PATH}/getAllSubscribers`);

//   return res.json();

// };

export const saveSubscriber = async (payload) => {
  const res = await fetch(`${NEWSLETTER_PATH}/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),

  });

  return res.json();
};