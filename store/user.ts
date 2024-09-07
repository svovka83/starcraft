import { create } from "zustand";
import { user } from "@/service/user";

interface UserState {
  username: string;
  error?: string;
  getUser: () => Promise<void>;
  loginUser: (username: string) => void;
  logoutUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  username: "",
  error: "",
  getUser: async () => {
    try {
      const data = await user();
      set({ username: data.username });
    } catch (error: any) {
      console.log("[GET_USER]", error);
      set({ error: error.response.data.message });
    }
  },
  loginUser: (username) => {
    set({ username: username });
  },
  logoutUser: () => {
    set({ username: "" });
  },
}));
