import { manaCounter } from "@/functions";
import { GameState } from "../game";

export function fightUnitDown(state: GameState) {
  const player = state.turn ? state.one : state.two;
  const opponent = !state.turn ? state.one : state.two;

  const mana = manaCounter(player.mana, player.fighterDown.mana);
  if (mana < 0) return state;

  const opponentHealth =
    opponent.fighterDown.health - player.fighterDown.attack;
  const playerHealth = player.fighterDown.health - opponent.fighterDown.attack;

  const opponentIs =
    opponentHealth <= 0
      ? {}
      : { ...opponent.fighterDown, health: opponentHealth };
  const playerIs =
    playerHealth <= 0 ? {} : { ...player.fighterDown, health: playerHealth };

  return {
    ...state,
    [!state.turn ? "one" : "two"]: {
      ...opponent,
      fighterDown: opponentIs,
    },
    [state.turn ? "one" : "two"]: {
      ...player,
      mana,
      fighterDown: playerIs,
    },
    message: `${player.fighterDown.name} fight down`,
  };
}
