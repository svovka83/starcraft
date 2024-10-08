import { GameState } from "../game";
import { manaCounter } from "@/functions";
import { useTriggerAnimate } from "@/store/trigger-animations";

export function addMinerals(state: GameState) {
  const player = state.turn ? state.one : state.two;

  const mana = manaCounter(player.mana, 1);
  if (mana < 0) return state;

  if (player.mine < 0) return state;
  if (player.worker.length === 0) return state;
  if (player.mine < player.worker.length) {
    player.minerals += player.mine;
    player.mine = 0;
    return { ...state };
  }
  player.minerals += player.worker.length;
  player.mine -= player.worker.length;
  player.mana = mana;

  const animateMineral = state.turn
    ? useTriggerAnimate.getState().setAnimateMineralOne
    : useTriggerAnimate.getState().setAnimateMineralTwo;
  animateMineral();

  return { ...state, message: `plus ${player.worker.length} minerals` };
}
