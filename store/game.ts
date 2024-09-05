import { create } from "zustand";
import { createGame, getGame, saveGame } from "@/service/game";
import {
  endTurn,
  byUnit,
  moveUnitUp,
  moveUnitDown,
  createWorker,
  addMinerals,
  fightUnitUp,
  fightUnitDown,
  fightBoss,
  fightWorker,
} from ".";
import { logicAI } from "./functions-ai-logic/logic-ai";

export type infoType = {
  name: string;
  image: string;
};

export type unitType = {
  id?: number;
  name: string;
  image: string;
  mana: number;
  health: number;
  attack: number;
  price: number;
};

export type PlayerProps = {
  name: string;
  image: string;
  mana: number;
  units: unitType[];
  battleground: unitType[];
  fighterUp: unitType;
  fighterDown: unitType;
  worker: unitType[];
  minerals: number;
  mine: number;
  boss: number;
};

export interface GameState {
  one: PlayerProps;
  two: PlayerProps;
  turn: boolean;
  message: string;
  endTurn: () => void;
  setCreateGame: (
    infoOne: infoType,
    infoTwo: infoType,
    shopOne: unitType[],
    shopTwo: unitType[]
  ) => Promise<void>;
  setGetGame: () => Promise<void>;
  getSaveGame: () => Promise<void>;
  chooseOne: (nameOne: string) => void;
  chooseTwo: (nameTwo: string) => void;
  buyUnit: (unitId: number) => void;
  moveUnitUp: (unitId: number) => void;
  moveUnitDown: (unitId: number) => void;
  createWorker: () => void;
  addMinerals: () => void;
  fightUnitUp: () => void;
  fightUnitDown: () => void;
  fightBoss: () => void;
  fightWorker: () => void;
  logicAI: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  one: {
    name: "",
    image: "",
    mana: 3,
    units: [],
    battleground: [],
    fighterUp: {} as unitType,
    fighterDown: {} as unitType,
    worker: [],
    minerals: 10,
    mine: 100,
    boss: 21,
  },
  two: {
    name: "",
    image: "",
    mana: 3,
    units: [],
    battleground: [],
    fighterUp: {} as unitType,
    fighterDown: {} as unitType,
    worker: [],
    minerals: 10,
    mine: 100,
    boss: 21,
  },
  turn: true,
  message: "don`t sleep",
  endTurn: () => set((state) => endTurn(state)),
  setCreateGame: async (
    infoOne: infoType,
    infoTwo: infoType,
    shopOne: unitType[],
    shopTwo: unitType[]
  ) => {
    try {
      const data = await createGame(infoOne, infoTwo, shopOne, shopTwo);
      set((state) => ({
        ["one"]: {
          ...state.one,
          name: data.nameOne,
          image: data.imageOne,
          units: data.shopOne,
          worker: [data.shopOne[0]],
        },
        ["two"]: {
          ...state.two,
          name: data.nameTwo,
          image: data.imageTwo,
          units: data.shopTwo,
          worker: [data.shopTwo[0]],
        },
      }));
    } catch (error) {
      console.log(error);
    }
  },
  setGetGame: async () => {
    try {
      const data = await getGame();
      set((state) => ({
        ["one"]: {
          ...state.one,
          name: data.nameOne,
          image: data.imageOne,
          mana: data.manaOne,
          units: data.shopOne,
          battleground: data.battleOne,
          fighterUp: data.fighterUpOne ? data.fighterUpOne : ({} as unitType),
          fighterDown: data.fighterDownOne
            ? data.fighterDownOne
            : ({} as unitType),
          worker: Array(data.workerOne)
            .fill(data.shopOne[0])
            .map(() => data.shopOne[0]),
          minerals: data.mineralsOne,
          mine: data.mineOne,
          boss: data.bossOne,
        },
        ["two"]: {
          ...state.two,
          name: data.nameTwo,
          image: data.imageTwo,
          mana: data.manaTwo,
          units: data.shopTwo,
          battleground: data.battleTwo,
          fighterUp: data.fighterUpTwo ? data.fighterUpTwo : ({} as unitType),
          fighterDown: data.fighterDownTwo
            ? data.fighterDownTwo
            : ({} as unitType),
          worker: Array(data.workerTwo)
            .fill(data.shopTwo[0])
            .map(() => data.shopTwo[0]),
          minerals: data.mineralsTwo,
          mine: data.mineTwo,
          boss: data.bossTwo,
        },
        turn: data.turn,
      }));
    } catch (error) {
      console.log(error);
    }
  },
  getSaveGame: async () => {
    try {
      const one = get().one;
      const two = get().two;
      const turn = get().turn;
      const data = await saveGame(one, two, turn);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  chooseOne: (nameOne: string) => {
    set((state) => {
      return {
        ["one"]: {
          ...state.one,
          name: nameOne,
        },
      };
    });
  },
  chooseTwo: (nameTwo: string) => {
    set((state) => {
      return {
        ["two"]: {
          ...state.two,
          name: nameTwo,
        },
      };
    });
  },
  buyUnit: (unitId: number) => set((state) => byUnit(state, unitId)),
  moveUnitUp: (unitId: number) => set((state) => moveUnitUp(state, unitId)),
  moveUnitDown: (unitId: number) => set((state) => moveUnitDown(state, unitId)),
  createWorker: () => set((state) => createWorker(state)),
  addMinerals: () => set((state) => addMinerals(state)),
  fightUnitUp: () => set((state) => fightUnitUp(state)),
  fightUnitDown: () => set((state) => fightUnitDown(state)),
  fightBoss: () => set((state) => fightBoss(state)),
  fightWorker: () => set((state) => fightWorker(state)),
  logicAI: () => {
    set((state) => logicAI(state, get));
  },
}));
