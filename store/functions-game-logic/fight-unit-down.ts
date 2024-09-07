import { GameState } from "../game";
import { manaCounter } from "@/functions";

export function fightUnitDown(state: GameState) {
  const player = state.turn ? state.one : state.two;
  const opponent = !state.turn ? state.one : state.two;

  const mana = manaCounter(player.mana, player.fighterDown.mana);
  if (mana < 0) return state;

  const opponentHealth =
    opponent.fighterDown.health - player.fighterDown.attack;

  const opponentIs =
    opponentHealth <= 0
      ? {}
      : { ...opponent.fighterDown, health: opponentHealth };

  return {
    ...state,
    [!state.turn ? "one" : "two"]: {
      ...opponent,
      fighterDown: opponentIs,
    },
    [state.turn ? "one" : "two"]: {
      ...player,
      mana,
    },
    message: `${player.fighterDown.name} kick ${opponent.fighterDown.name}`,
  };
}
