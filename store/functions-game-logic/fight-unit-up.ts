import { GameState } from "../game";
import { manaCounter } from "@/functions";

export function fightUnitUp(state: GameState) {
  const player = state.turn ? state.one : state.two;
  const opponent = !state.turn ? state.one : state.two;

  const mana = manaCounter(player.mana, player.fighterUp.mana);
  if (mana < 0) return state;

  const opponentHealth = opponent.fighterUp.health - player.fighterUp.attack;
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
    message: `${player.fighterUp.name} fight up`,
  };
}
