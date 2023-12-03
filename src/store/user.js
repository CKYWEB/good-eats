import { fetchUserInfo } from "@/api/user";
import { create } from "zustand";

export const useUserStore = create((set) => ({
    currentUser: {},
    loading: true,
    fetchCurrentUser: async () => {
        const res = await fetchUserInfo();
        set({ 
            currentUser: res?.data,
            loading: false,
        });
    },
}));