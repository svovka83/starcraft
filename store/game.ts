import { create } from "zustand";

import { StaticImageData } from "next/image";

import { DRONE, ZERG } from "@/constants/zerg";
import { PROBE, PROTOSS } from "@/constants/protoss";

export type unitType = {
  id: number;
  name: string;
  image: StaticImageData;
  health: number;
  mana: number;
  attack: number;
  price: number;
};

type PlayerProps = {
  units: unitType[];
  army: unitType[];
  battleground: unitType[];
  fighter: object;
  worker: unitType[];
  minerals: number;
  mine: number;
};

interface GameState {
  one: PlayerProps;
  two: PlayerProps;
  turn: boolean;
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
    minerals: 10,
    mine: 20,
  },
  two: {
    units: PROTOSS,
    army: [],
    battleground: [],
    fighter: {},
    worker: [PROBE],
    minerals: 10,
    mine: 20,
  },
  turn: true,
  addUnitToArmy: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.units.find((unit) => unit.id === unitId);

      if (player.minerals < addUnit!.price) return state;
      const newMinerals = player.minerals - addUnit!.price;

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          army: [...player.army, addUnit],
          minerals: newMinerals,
        },
        turn: !state.turn,
      };
    }),
  addUnitToBattleground: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.army.find((unit) => unit.id === unitId);
      const removeUnit = player.army.filter((unit) => unit.id !== unitId);

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          army: removeUnit,
          battleground: [...player.battleground, addUnit],
        },
        turn: !state.turn,
      };
    }),
  addUnitToFighter: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.battleground.find(
        (unit: unitType) => unit.id === unitId
      );
      const removeUnit = player.battleground.filter(
        (unit: unitType) => unit.id !== unitId
      );
      const returnFighter =
        Object.keys(player.fighter).length !== 0
          ? [...removeUnit, player.fighter]
          : removeUnit;

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          battleground: returnFighter,
          fighter: addUnit,
        },
        turn: !state.turn,
      };
    }),
  createWorker: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      if (player.worker.length === 3) return state;
      player.minerals -= DRONE.price;

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          worker: [...player.worker, state.turn ? DRONE : PROBE],
        },
        turn: !state.turn,
      };
    }),
  addMinerals: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      if (player.mine < 0) return state;
      if (player.mine < player.worker.length) {
        player.minerals += player.mine;
        player.mine = 0;
        return { ...state };
      }
      player.minerals += player.worker.length;
      player.mine -= player.worker.length;
      return { ...state, turn: !state.turn };
    }),
}));
