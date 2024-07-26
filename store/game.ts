import { create } from "zustand";

import { droneType, zergType, DRONE, ZERG } from "@/constants/zerg";

interface GameState {
  player: {
    units: zergType[];
    army: any[];
  };
  addUnitToArmy: (unitId: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  player: {
    units: ZERG,
    army: [],
  },
  addUnitToArmy: (unitId: number) =>
    set((state) => {
      const addUnit = state.player.units.find((unit) => unit.id === unitId);

      return {
        player: {
          ...state.player,
          army: [...state.player.army, addUnit],
        },
      };
    }),
}));
