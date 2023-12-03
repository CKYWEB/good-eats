import { fetchUserInfo } from "@/api/user";
import { create } from "zustand";

export const useUserStore = create((set) => ({
    currentUser: {},
    fetchCurrentUser: async () => {
        const res = await fetchUserInfo();
        set({ 
            currentUser: res?.data,
        });
    },
}));