import { GameState } from "../game";
import { manaCounter } from "@/functions";

export function moveUnitDown(state: GameState, unitId: number) {
  const player = state.turn ? state.one : state.two;

  const addUnit = player.battleground.find((unit) => unit.id === unitId);

  const mana = manaCounter(player.mana, addUnit!.mana);
  if (mana < 0) return state;

  const removeUnit = player.battleground.filter((unit) => unit.id !== unitId);
  const returnFighter =
    Object.keys(player.fighterDown).length !== 0
      ? [...removeUnit, player.fighterDown]
      : removeUnit;

  return {
    [state.turn ? "one" : "two"]: {
      ...player,
      mana,
      battleground: returnFighter,
      fighterDown: addUnit,
    },
    message: `${addUnit!.name} going down`,
  };
}
