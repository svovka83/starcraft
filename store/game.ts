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
  refreshState,
} from ".";
import { logicAI } from "./functions-ai-logic/logic-ai";
import { GameMode } from "@prisma/client";

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
  gameMode: GameMode;
  isLoading: boolean;
  endTurn: () => void;
  setCreateGame: (
    infoOne: infoType,
    infoTwo: infoType,
    shopOne: unitType[],
    shopTwo: unitType[],
    gameMode: GameMode
  ) => Promise<void>;
  setGetGame: () => Promise<void>;
  getSaveGame: () => Promise<void>;
  chooseOne: (nameOne: string) => void;
  chooseTwo: (nameTwo: string) => void;
  chooseGameMode: (gameMode: GameMode) => void;
  refreshState: () => void;
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
  message: "Ok! let's play!",
  gameMode: "COMPUTER",
  isLoading: false,
  endTurn: () => set((state) => endTurn(state)),
  setCreateGame: async (
    infoOne: infoType,
    infoTwo: infoType,
    shopOne: unitType[],
    shopTwo: unitType[],
    gameMode: GameMode
  ) => {
    try {
      const data = await createGame(
        infoOne,
        infoTwo,
        shopOne,
        shopTwo,
        gameMode
      );
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
        gameMode: data.gameMode,
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
        gameMode: data.gameMode,
      }));
    } catch (error) {
      console.log(error);
    }
  },
  getSaveGame: async () => {
    try {
      set({ isLoading: true });
      const one = get().one;
      const two = get().two;
      const turn = get().turn;
      const data = await saveGame(one, two, turn);
      return data;
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    } finally {
      set({ isLoading: false });
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
  chooseGameMode: (gameMode: GameMode) => {
    set(() => {
      return {
        gameMode: gameMode,
      };
    });
  },
  refreshState: () => set(() => refreshState(get)),
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
