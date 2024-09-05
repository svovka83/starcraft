import { GameState } from "../game";
import { manaCounter } from "@/functions";

export function byUnit(state: GameState, unitId: number) {
  const player = state.turn ? state.one : state.two;

  const addUnit = player.units.find((unit) => unit.id === unitId);

  const mana = manaCounter(player.mana, addUnit!.mana);
  if (mana < 0) return state;

  if (player.minerals < addUnit!.price) return state;
  const newMinerals = player.minerals - addUnit!.price;

  return {
    [state.turn ? "one" : "two"]: {
      ...player,
      mana,
      battleground: [...player.battleground, addUnit],
      minerals: newMinerals,
    },
    message: `${addUnit!.name} is ready`,
  };
}
