import { fetchUserInfo } from "@/api/user";
import { create } from "zustand";

export const useUserStore = create((set, get) => ({
    currentUser: {},
    fetchCurrentUser: async () => {
        const res = await fetchUserInfo();
        set({ 
            currentUser: res?.data,
        });
    },
    isLoggedIn: () => {
        return !!get().currentUser?.email;
    },
    isAdmin: () => {
        return get().currentUser?.role === 1;
    },
}));
