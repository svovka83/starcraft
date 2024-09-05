import { GameState } from "../game";
import { manaCounter } from "@/functions";

export function createWorker(state: GameState) {
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
    message: "created worker",
  };
}
