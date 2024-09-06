import { manaCounter } from "@/functions";
import { GameState } from "../game";

export const fightWorker = (state: GameState) => {
  const player = state.turn ? state.one : state.two;
  const opponent = !state.turn ? state.one : state.two;

  const mana = manaCounter(player.mana, player.fighterDown.mana);
  if (mana < 0) return state;

  if (opponent.worker.length === 0) return state;

  opponent.worker.pop?.();

  return {
    ...state,
    [!state.turn ? "one" : "two"]: {
      ...opponent,
    },
    [state.turn ? "one" : "two"]: {
      ...player,
      mana,
    },
    message: `${player.fighterDown.name} kill ${opponent.units[0].name}`,
  };
};
