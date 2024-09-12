import { GameState, unitType } from "../game";

export function refreshState(get: () => GameState) {
  return {
    ["one"]: {
      ...get().one,
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
    ["two"]: {
      ...get().two,
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
  };
}
