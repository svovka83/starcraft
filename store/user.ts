import { create } from "zustand";
import { user, users } from "@/service/user";

interface UserState {
  username: string;
  loading: boolean;
  error?: string;
  quantity: number;
  getUser: () => Promise<void>;
  loginUser: (username: string) => void;
  logoutUser: () => void;
  onLoading: () => void;
  offLoading: () => void;
  setUsersQuantity: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  username: "",
  loading: false,
  error: "",
  quantity: 0,
  getUser: async () => {
    try {
      const data = await user();
      set({ username: data.username });
    } catch (error: any) {
      console.log("[GET_USER]", error);
      set({ error: error.response.data.message });
    }
  },
  setUsersQuantity: async () => {
    try {
      const data = await users();
      set({ quantity: data });
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
  onLoading: () => {
    set({ loading: true });
  },
  offLoading: () => {
    set({ loading: false });
  },
}));
