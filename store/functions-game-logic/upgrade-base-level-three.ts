import { GameState } from "../game";
import { manaCounter } from "@/functions";
import { useTriggerAnimate } from "@/store/trigger-animations";
import { new_level } from "@/constants/sounds";

export function upgradeBaseLevelThree(state: GameState) {
  const player = state.turn ? state.one : state.two;

  const mana = manaCounter(player.mana, 4);
  if (mana < 0) return state;

  if (player.minerals < 20) return state;

  const playerMinerals = player.minerals - 20;
  const playerMana = player.currentMana + 1;

  const animateCelebratingUpgrade = state.turn
    ? useTriggerAnimate.getState().setAnimateCelebratingUpgradeOne
    : useTriggerAnimate.getState().setAnimateCelebratingUpgradeTwo;
  animateCelebratingUpgrade();
  new_level.play();

  return {
    [state.turn ? "one" : "two"]: {
      ...player,
      mana,
      currentMana: playerMana,
      minerals: playerMinerals,
    },
    message: "Upgraded to level 3",
  };
}
