import { manaCounter } from "@/functions";
import { GameState } from "../game";
import { useTriggerAnimate } from "../trigger-animations";

export const fightWorker = (state: GameState) => {
  const player = state.turn ? state.one : state.two;
  const opponent = !state.turn ? state.one : state.two;

  const mana = manaCounter(player.mana, player.fighterDown.mana);
  if (mana < 0) return state;

  if (opponent.worker.length === 0) return state;

  opponent.worker.pop?.();

  if (!state.turn) {
    const animateDamageWorkerOne =
      useTriggerAnimate.getState().setAnimateDamageWorkerOne;
    animateDamageWorkerOne();
  }
  if (state.turn) {
    const animateDamageWorkerTwo =
      useTriggerAnimate.getState().setAnimateDamageWorkerTwo;
    animateDamageWorkerTwo();
  }

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
