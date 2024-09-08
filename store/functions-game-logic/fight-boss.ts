import { GameState } from "../game";
import { manaCounter } from "@/functions";
import { useTriggerAnimate } from "@/store/trigger-animations";

export function fightBoss(state: GameState) {
  const player = state.turn ? state.one : state.two;
  const opponent = !state.turn ? state.one : state.two;

  const mana = manaCounter(player.mana, player.fighterUp.mana);
  if (mana < 0) return state;

  const bossHealth = opponent.boss - player.fighterUp.attack;
  const isBoss = bossHealth <= 0 ? 0 : bossHealth;

  const damageBoss = state.turn
    ? useTriggerAnimate.getState().setAnimateDamageBossTwo
    : useTriggerAnimate.getState().setAnimateDamageBossOne;
  damageBoss();

  return {
    ...state,
    [!state.turn ? "one" : "two"]: {
      ...opponent,
      boss: isBoss,
    },
    [state.turn ? "one" : "two"]: {
      ...player,
      mana,
    },
    message: `${player.fighterUp.name} kick boss`,
  };
}
