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
  battleground: unitType[];
  fighter: unitType;
  worker: unitType[];
  minerals: number;
  mine: number;
  boss: number;
};

interface GameState {
  one: PlayerProps;
  two: PlayerProps;
  turn: boolean;
  buyUnit: (unitId: number) => void;
  moveUnitToFighter: (unitId: number) => void;
  createWorker: () => void;
  addMinerals: () => void;
  fightUnit: () => void;
  fightBoss: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  one: {
    units: ZERG,
    battleground: [],
    fighter: {} as unitType,
    worker: [DRONE],
    minerals: 10,
    mine: 20,
    boss: 25,
  },
  two: {
    units: PROTOSS,
    battleground: [],
    fighter: {} as unitType,
    worker: [PROBE],
    minerals: 10,
    mine: 20,
    boss: 25,
  },
  turn: true,
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
    moveUnitToFighter: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.battleground.find((unit) => unit.id === unitId);
      const removeUnit = player.battleground.filter(
        (unit) => unit.id !== unitId
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
  fightUnit: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      const opponentHealth = opponent.fighter.health - player.fighter.attack;
      const playerHealth = player.fighter.health - opponent.fighter.attack / 2;

      const opponentIs =
        opponentHealth <= 0
          ? {}
          : { ...opponent.fighter, health: opponentHealth };
      const playerIs =
        playerHealth <= 0 ? {} : { ...player.fighter, health: playerHealth };

      return {
        ...state,
        [!state.turn ? "one" : "two"]: {
          ...opponent,
          fighter: opponentIs,
        },
        [state.turn ? "one" : "two"]: {
          ...player,
          fighter: playerIs,
        },
        turn: !state.turn,
      };
    }),
  fightBoss: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      const bossHealth = opponent.boss - player.fighter.attack;
      const playerHealth = player.fighter.health - player.fighter.attack;

      const bossIs = bossHealth <= 0 ? 0 : bossHealth;
      const playerIs =
        playerHealth <= 0 ? {} : { ...player.fighter, health: playerHealth };

      return {
        ...state,
        [!state.turn ? "one" : "two"]: {
          ...opponent,
          boss: bossIs,
        },
        [state.turn ? "one" : "two"]: {
          ...player,
          fighter: playerIs,
        },
        turn: !state.turn,
      };
    }),
}));
