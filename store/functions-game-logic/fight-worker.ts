import { manaCounter } from "@/functions";
import { GameState } from "../game";

export const fightWorker = (state: GameState) => {
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
    message: `${player.fighterDown.name} put worker`,
  };
}