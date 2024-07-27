import { create } from "zustand";

import { workerType, unitType, DRONE, ZERG } from "@/constants/zerg";

interface GameState {
  one: {
    units: unitType[];
    army: any[];
    battleground: any[];
    fighter: any;
  };
  addUnitToArmy: (unitId: number) => void;
  addUnitToBattleground: (unitId: number) => void;
  addUnitToFighter: (unitId: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  one: {
    units: ZERG,
    army: [],
    battleground: [],
    fighter: {},
  },
  addUnitToArmy: (unitId: number) =>
    set((state) => {
      const addUnit = state.one.units.find((unit) => unit.id === unitId);

      return {
        one: {
          ...state.one,
          army: [...state.one.army, addUnit],
        },
      };
    }),
  addUnitToBattleground: (unitId: number) =>
    set((state) => {
      const addUnit = state.one.army.find((unit) => unit.id === unitId);
      const removeUnit = state.one.army.filter((unit) => unit.id !== unitId);

      return {
        one: {
          ...state.one,
          army: removeUnit,
          battleground: [...state.one.battleground, addUnit],
        },
      };
    }),
  addUnitToFighter: (unitId: number) =>
    set((state) => {
      const addUnit = state.one.battleground.find((unit) => unit.id === unitId);
      const removeUnit = state.one.battleground.filter(
        (unit) => unit.id !== unitId
      );
      const returnFighter = state.one.fighter.name
        ? [...removeUnit, state.one.fighter]
        : removeUnit;

      return {
        one: {
          ...state.one,
          battleground: returnFighter,
          fighter: addUnit,
        },
      };
    }),
}));
