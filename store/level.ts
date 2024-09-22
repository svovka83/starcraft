import { create } from "zustand";

export type Level = {
  name: string;
  currentMana: number;
};

interface LevelState {
  level: Level;
  setChooseLevel: (level: Level) => void;
}

export const useLevelStore = create<LevelState>((set) => ({
  level: { name: "Level 1", currentMana: 3 },
  setChooseLevel: (level: Level) => set({ level }),
}));
