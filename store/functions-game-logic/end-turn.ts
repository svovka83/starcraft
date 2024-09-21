import { GameState } from "../game";
import { finish_turn } from "@/constants";

export function endTurn(state: GameState) {
  finish_turn.play();

  return {
    ["one"]: {
      ...state.one,
      mana: state.one.currentMana,
    },
    ["two"]: {
      ...state.two,
      mana: state.two.currentMana,
    },
    turn: !state.turn,
    message: "change turn",
  };
}
