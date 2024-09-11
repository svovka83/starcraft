import { GameState } from "../game";
import { finish_turn } from "@/constants";

export function endTurn(state: GameState) {
  finish_turn.play();

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
