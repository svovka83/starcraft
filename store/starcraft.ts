import { create } from "zustand";
import { Category } from "@prisma/client";
import { categories, unitsGroup } from "@/service/starcraft";
import { unitsGroupDTO } from "@/service/dto/starcraft.dto";

interface StarcraftState {
  activeId: string;
  categories: Category[];
  unitsGroup: unitsGroupDTO[];
  loading: boolean;
  error: string;
  setActiveId: (activeId: string) => void;
  setCategories: () => Promise<void>;
  setUnitsGroup: () => Promise<void>;
}

export const useStarcraftStore = create<StarcraftState>((set) => ({
  activeId: "Terran",
  categories: [],
  unitsGroup: [],
  loading: true,
  error: "",
  setActiveId: (activeId) => set({ activeId }),
  setCategories: async () => {
    try {
      set({ loading: true });
      const data = await categories();
      set((state) => ({ ...state, categories: data, loading: false }));
    } catch (error: any) {
      set({ error: error.response.data.message, loading: false });
    }
  },
  setUnitsGroup: async () => {
    try {
      set({ loading: true });
      const data = await unitsGroup();
      set((state) => ({ ...state, unitsGroup: data, loading: false }));
    } catch (error: any) {
      set({ error: error.response.data.message, loading: false });
    }
  },
}));
