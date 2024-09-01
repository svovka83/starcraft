import { create } from "zustand";
import { manaCounter } from "@/functions";
import { createGame, getGame, saveGame } from "@/service/game";

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

interface GameState {
  one: PlayerProps;
  two: PlayerProps;
  turn: boolean;
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
    minerals: 5,
    mine: 20,
    boss: 25,
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
      await saveGame(one, two, turn);
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
