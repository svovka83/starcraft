import { GameState } from "../game";

export function endTurn(state: GameState) {
  return {
    ["one"]: {
      ...state.one,
      mana: 3,
    },
    ["two"]: {
      ...state.two,
      mana: 3,
    },
    turn: !state.turn,
    message: "change turn",
  };
}
