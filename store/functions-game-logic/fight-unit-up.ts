import { GameState } from "../game";
import { manaCounter } from "@/functions";

export function fightUnitUp(state: GameState) {
  const player = state.turn ? state.one : state.two;
  const opponent = !state.turn ? state.one : state.two;

  const mana = manaCounter(player.mana, player.fighterUp.mana);
  if (mana < 0) return state;

  const opponentHealth = opponent.fighterUp.health - player.fighterUp.attack;

  const opponentIs =
    opponentHealth <= 0
      ? {}
      : { ...opponent.fighterUp, health: opponentHealth };

  return {
    ...state,
    [!state.turn ? "one" : "two"]: {
      ...opponent,
      fighterUp: opponentIs,
    },
    [state.turn ? "one" : "two"]: {
      ...player,
      mana,
    },
    message: `${player.fighterUp.name} kick ${opponent.fighterUp.name}`,
  };
}
