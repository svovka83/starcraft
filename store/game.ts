import { create } from "zustand";
import { manaCounter } from "@/functions";
import { createShop } from "@/service/shop";

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
  setOneUnits: (values: unitType[]) => Promise<void>;
  chooseOne: (infoOne: infoType) => void;
  chooseTwo: (two: unitType[], infoTwo: infoType) => void;
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
    battleground: [
      {
        id: 7,
        name: "KSM",
        image: "/images/imgTerran/KSM.png",
        health: 1,
        mana: 1,
        attack: 1,
        price: 1,
      },
      {
        id: 8,
        name: "marine",
        image: "/images/imgTerran/marine.png",
        health: 2,
        mana: 1,
        attack: 1,
        price: 1,
      },
    ],
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
    battleground: [
      {
        id: 9,
        name: "zergling",
        image: "/images/imgZerg/zerling.png",
        health: 1,
        mana: 1,
        attack: 1,
        price: 1,
      },
      {
        id: 10,
        name: "gydral",
        image: "/images/imgZerg/gidral.png",
        health: 2,
        mana: 1,
        attack: 2,
        price: 2,
      },
    ],
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
  setOneUnits: async (values: unitType[]) => {
    try {
      const data = await createShop(values);
      set((state) => ({
        ["one"]: {
          ...state.one,
          units: data.units,
          worker: [data.units[0]]
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
  chooseTwo: (raceTwo: unitType[], infoTwo: infoType) => {
    set((state) => {
      return {
        ["two"]: {
          ...state.two,
          info: infoTwo,
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
