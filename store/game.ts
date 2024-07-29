import { create } from "zustand";

import { workerType, unitType, DRONE, ZERG } from "@/constants/zerg";

interface GameState {
  one: {
    units: unitType[];
    army: any[];
    battleground: any[];
    fighter: any;
    worker: any[];
    minerals: number;
    mine: number;
  };
  addUnitToArmy: (unitId: number) => void;
  addUnitToBattleground: (unitId: number) => void;
  addUnitToFighter: (unitId: number) => void;
  createWorker: () => void;
  addMinerals: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  one: {
    units: ZERG,
    army: [],
    battleground: [],
    fighter: {},
    worker: [DRONE],
    minerals: 5,
    mine: 10,
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
  createWorker: () =>
    set((state) => {
      if (state.one.worker.length === 3) return state;
      state.one.minerals -= DRONE.price;

      return {
        one: {
          ...state.one,
          worker: [...state.one.worker, DRONE],
        },
      };
    }),
  addMinerals: () =>
    set((state) => {
      if (state.one.mine < 0) return state;
      if (state.one.mine < state.one.worker.length) {
        state.one.minerals += state.one.mine;
        state.one.mine = 0;
        return { ...state };
      }
      state.one.minerals += state.one.worker.length;
      state.one.mine -= state.one.worker.length;
      return { ...state };
    }),
}));
