import { create } from "zustand";
import { StaticImageData } from "next/image";

import { ZERG } from "@/constants/zerg";
import { TERRAN } from "@/constants/terran";
import { PROTOSS } from "@/constants/protoss";

export const PLAYER_ONE = ZERG || TERRAN || PROTOSS;
export const PLAYER_TWO = ZERG || TERRAN || PROTOSS;

export type unitType = {
  id: number;
  name: string;
  image: StaticImageData;
  health: number;
  mana: number;
  attack: number;
  price: number;
  disabled?: boolean;
};

type PlayerProps = {
  units: unitType[];
  battleground: unitType[];
  fighterUp: unitType;
  fighterDown: unitType;
  worker: unitType[];
  minerals: number;
  mine: number;
  boss: number;
};

interface GameState {
  one: PlayerProps;
  two: PlayerProps;
  turn: boolean;
  chooseRace: (one: unitType[], two: unitType[]) => void;
  buyUnit: (unitId: number) => void;
  moveUnitUp: (unitId: number) => void;
  moveUnitDown: (unitId: number) => void;
  createWorker: () => void;
  addMinerals: () => void;
  fightUnitUp: () => void;
  fightUnitDown: () => void;
  fightBoss: () => void;
  fightWorker: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  one: {
    units: [],
    battleground: [],
    fighterUp: {} as unitType,
    fighterDown: {} as unitType,
    worker: [],
    minerals: 5,
    mine: 20,
    boss: 25,
  },
  two: {
    units: [],
    battleground: [],
    fighterUp: {} as unitType,
    fighterDown: {} as unitType,
    worker: [],
    minerals: 5,
    mine: 20,
    boss: 25,
  },
  turn: true,
  chooseRace: (raceOne: unitType[], raceTwo: unitType[]) => {
    set((state) => {
      return {
        ["one"]: {
          ...state.one,
          units: raceOne,
          worker: [raceOne[0]],
        },
        ["two"]: {
          ...state.one,
          units: raceTwo,
          worker: [raceTwo[0]],
        },
      };
    });
  },
  buyUnit: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.units.find((unit) => unit.id === unitId);

      if (player.minerals < addUnit!.price) return state;
      const newMinerals = player.minerals - addUnit!.price;

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          battleground: [...player.battleground, addUnit],
          minerals: newMinerals,
        },
        turn: !state.turn,
      };
    }),
  moveUnitUp: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.battleground.find((unit) => unit.id === unitId);
      const removeUnit = player.battleground.filter(
        (unit) => unit.id !== unitId
      );
      const returnFighter =
        Object.keys(player.fighterUp).length !== 0
          ? [...removeUnit, player.fighterUp]
          : removeUnit;

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          battleground: returnFighter,
          fighterUp: addUnit,
        },
        turn: !state.turn,
      };
    }),
  moveUnitDown: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.battleground.find((unit) => unit.id === unitId);
      const removeUnit = player.battleground.filter(
        (unit) => unit.id !== unitId
      );
      const returnFighter =
        Object.keys(player.fighterDown).length !== 0
          ? [...removeUnit, player.fighterDown]
          : removeUnit;

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          battleground: returnFighter,
          fighterDown: addUnit,
        },
        turn: !state.turn,
      };
    }),
  createWorker: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      if (player.worker.length === 4) return state;

      if (player.minerals === 0) return state;

      player.minerals -= 1;

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          worker: [
            ...player.worker,
            state.turn ? state.one.units[0] : state.two.units[0],
          ],
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
  fightUnitUp: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      const opponentHealth =
        opponent.fighterUp.health - player.fighterUp.attack;
      const playerHealth =
        player.fighterUp.health - opponent.fighterUp.attack / 2;

      const opponentIs =
        opponentHealth <= 0
          ? {}
          : { ...opponent.fighterUp, health: opponentHealth };
      const playerIs =
        playerHealth <= 0 ? {} : { ...player.fighterUp, health: playerHealth };

      return {
        ...state,
        [!state.turn ? "one" : "two"]: {
          ...opponent,
          fighterUp: opponentIs,
        },
        [state.turn ? "one" : "two"]: {
          ...player,
          fighterUp: playerIs,
        },
        turn: !state.turn,
      };
    }),
  fightUnitDown: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      const opponentHealth =
        opponent.fighterDown.health - player.fighterDown.attack;
      const playerHealth =
        player.fighterDown.health - opponent.fighterDown.attack / 2;

      const opponentIs =
        opponentHealth <= 0
          ? {}
          : { ...opponent.fighterDown, health: opponentHealth };
      const playerIs =
        playerHealth <= 0
          ? {}
          : { ...player.fighterDown, health: playerHealth };

      return {
        ...state,
        [!state.turn ? "one" : "two"]: {
          ...opponent,
          fighterDown: opponentIs,
        },
        [state.turn ? "one" : "two"]: {
          ...player,
          fighterDown: playerIs,
        },
        turn: !state.turn,
      };
    }),
  fightBoss: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      const bossHealth = opponent.boss - player.fighterUp.attack;
      const playerHealth = player.fighterUp.health - player.fighterUp.attack;

      const isBoss = bossHealth <= 0 ? 0 : bossHealth;
      const isPlayer =
        playerHealth <= 0 ? {} : { ...player.fighterUp, health: playerHealth };

      return {
        ...state,
        [!state.turn ? "one" : "two"]: {
          ...opponent,
          boss: isBoss,
        },
        [state.turn ? "one" : "two"]: {
          ...player,
          fighterUp: isPlayer,
        },
        turn: !state.turn,
      };
    }),
  fightWorker: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      if (opponent.worker.length === 0) return state;

      const playerHealth = player.fighterDown.health - 1;
      opponent.worker.pop?.();

      const isPlayer =
        playerHealth <= 0
          ? {}
          : { ...player.fighterDown, health: playerHealth };

      return {
        ...state,
        [!state.turn ? "one" : "two"]: {
          ...opponent,
        },
        [state.turn ? "one" : "two"]: {
          ...player,
          fighterDown: isPlayer,
        },
        turn: !state.turn,
      };
    }),
}));
