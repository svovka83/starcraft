import { create } from "zustand";

interface StarcraftState {
  activeId: string;
  setActiveId: (activeId: string) => void;
}

export const useStarcraftStore = create<StarcraftState>((set) => ({
  activeId: "Terran",
  setActiveId: (activeId) => set({ activeId }),
}));
