import { create } from "zustand";
import { manaCounter } from "@/functions";
import { createGame, getGame } from "@/service/game";
import { InfoOne, InfoTwo } from "@prisma/client";

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

type PlayerProps = {
  info: infoType;
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

interface GameState {
  one: PlayerProps;
  two: PlayerProps;
  turn: boolean;
  endTurn: () => void;
  setCreateGame: (
    infoOne: infoType,
    infoTwo: infoType,
    one: unitType[],
    two: unitType[]
  ) => Promise<void>;
  setGetGame: () => Promise<void>;
  chooseOne: (infoOne: infoType) => void;
  chooseTwo: (infoTwo: infoType) => void;
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

export const useGameStore = create<GameState>((set) => ({
  one: {
    info: {} as infoType,
    mana: 3,
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
    info: {} as infoType,
    mana: 3,
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
  endTurn: () => {
    set((state) => ({
      ["one"]: {
        ...state.one,
        mana: 3,
      },
      ["two"]: {
        ...state.two,
        mana: 3,
      },
      turn: !state.turn,
    }));
  },
  setCreateGame: async (
    infoOne: infoType,
    infoTwo: infoType,
    one: unitType[],
    two: unitType[]
  ) => {
    try {
      const data = await createGame(infoOne, infoTwo, one, two);
      set((state) => ({
        ["one"]: {
          ...state.one,
          info: data.infoOne,
          units: data.shopOne.unitsOne,
          worker: [data.shopOne.unitsOne[0]],
        },
        ["two"]: {
          ...state.two,
          info: data.infoTwo,
          units: data.shopTwo.unitsTwo,
          worker: [data.shopTwo.unitsTwo[0]],
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
          info: data.infoOne,
          units: data.shopOne.unitsOne,
          worker: [data.shopOne.unitsOne[0]],
        },
        ["two"]: {
          ...state.two,
          info: data.infoTwo,
          units: data.shopTwo.unitsTwo,
          worker: [data.shopTwo.unitsTwo[0]],
        },
      }));
    } catch (error) {
      console.log(error);
    }
  },
  chooseOne: (infoOne: infoType) => {
    set((state) => {
      return {
        ["one"]: {
          ...state.one,
          info: infoOne,
        },
      };
    });
  },
  chooseTwo: (infoTwo: infoType) => {
    set((state) => {
      return {
        ["two"]: {
          ...state.two,
          info: infoTwo,
        },
      };
    });
  },
  buyUnit: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.units.find((unit) => unit.id === unitId);

      const mana = manaCounter(player.mana, addUnit!.mana);
      if (mana < 0) return state;

      if (player.minerals < addUnit!.price) return state;
      const newMinerals = player.minerals - addUnit!.price;

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          mana,
          battleground: [...player.battleground, addUnit],
          minerals: newMinerals,
        },
      };
    }),
  moveUnitUp: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.battleground.find((unit) => unit.id === unitId);

      const mana = manaCounter(player.mana, addUnit!.mana);
      if (mana < 0) return state;

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
          mana,
          battleground: returnFighter,
          fighterUp: addUnit,
        },
      };
    }),
  moveUnitDown: (unitId: number) =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.battleground.find((unit) => unit.id === unitId);

      const mana = manaCounter(player.mana, addUnit!.mana);
      if (mana < 0) return state;

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
          mana,
          battleground: returnFighter,
          fighterDown: addUnit,
        },
      };
    }),
  createWorker: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const mana = manaCounter(player.mana, 1);
      if (mana < 0) return state;

      if (player.worker.length === 4) return state;

      if (player.minerals === 0) return state;

      player.minerals -= 1;

      return {
        [state.turn ? "one" : "two"]: {
          ...player,
          mana,
          worker: [
            ...player.worker,
            state.turn ? state.one.units[0] : state.two.units[0],
          ],
        },
      };
    }),
  addMinerals: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;

      const mana = manaCounter(player.mana, 1);
      if (mana < 0) return state;

      if (player.mine < 0) return state;
      if (player.mine < player.worker.length) {
        player.minerals += player.mine;
        player.mine = 0;
        return { ...state };
      }
      player.minerals += player.worker.length;
      player.mine -= player.worker.length;
      player.mana = mana;

      return { ...state };
    }),
  fightUnitUp: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      const mana = manaCounter(player.mana, player.fighterUp.mana);
      if (mana < 0) return state;

      const opponentHealth =
        opponent.fighterUp.health - player.fighterUp.attack;
      const playerHealth = player.fighterUp.health - opponent.fighterUp.attack;

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
          mana,
          fighterUp: playerIs,
        },
      };
    }),
  fightUnitDown: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      const mana = manaCounter(player.mana, player.fighterDown.mana);
      if (mana < 0) return state;

      const opponentHealth =
        opponent.fighterDown.health - player.fighterDown.attack;
      const playerHealth =
        player.fighterDown.health - opponent.fighterDown.attack;

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
          mana,
          fighterDown: playerIs,
        },
      };
    }),
  fightBoss: () => {
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      const mana = manaCounter(player.mana, player.fighterUp.mana);
      if (mana < 0) return state;

      const bossHealth = opponent.boss - player.fighterUp.attack;
      const isBoss = bossHealth <= 0 ? 0 : bossHealth;

      return {
        ...state,
        [!state.turn ? "one" : "two"]: {
          ...opponent,
          boss: isBoss,
        },
      };
    });
    setTimeout(() => {
      set((state) => {
        const player = state.turn ? state.one : state.two;

        const mana = manaCounter(player.mana, player.fighterUp.mana);
        if (mana < 0) return state;

        const playerHealth = player.fighterUp.health - player.fighterUp.attack;
        const isPlayer =
          playerHealth <= 0
            ? {}
            : { ...player.fighterUp, health: playerHealth };

        return {
          ...state,
          [state.turn ? "one" : "two"]: {
            ...player,
            mana,
            fighterUp: isPlayer,
          },
        };
      });
    }, 3000);
  },
  fightWorker: () =>
    set((state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = !state.turn ? state.one : state.two;

      const mana = manaCounter(player.mana, player.fighterDown.mana);
      if (mana < 0) return state;

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
          mana,
          fighterDown: isPlayer,
        },
      };
    }),
}));
