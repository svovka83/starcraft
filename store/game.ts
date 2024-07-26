import { create } from "zustand";

import { workerType, unitType, DRONE, ZERG } from "@/constants/zerg";

interface GameState {
  player: {
    units: unitType[];
    army: any[];
  };
  addUnitToArmy: (unitId: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  player: {
    units: ZERG,
    army: [
      {
        id: 1,
        name: "zergling",
        health: 1,
        mana: 1,
        attack: 1,
        price: 1,
      }
    ],
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
