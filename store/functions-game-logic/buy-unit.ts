import { GameState } from "../game";
import { manaCounter } from "@/functions";
import lodash from "lodash";

export function byUnit(state: GameState, unitId: number) {
  const player = state.turn ? state.one : state.two;

  if (player.battleground.length === 8) return state;

  const addUnit = player.units.find((unit) => unit.id === unitId);

  const mana = manaCounter(player.mana, addUnit!.mana);
  if (mana < 0) return state;

  if (player.minerals < addUnit!.price) return state;
  const newMinerals = player.minerals - addUnit!.price;

  const newId = lodash.random(0, 1000000);
  const newUnit = { ...addUnit, id: newId };

  return {
    [state.turn ? "one" : "two"]: {
      ...player,
      mana,
      battleground: [...player.battleground, newUnit],
      minerals: newMinerals,
    },
    message: `${addUnit!.name} is ready`,
  };
}
