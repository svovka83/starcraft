import { GameState } from "../game";
import { manaCounter } from "@/functions";
import { move } from "@/constants";
import { useTriggerAnimate } from "../trigger-animations";
// not finished - when unit come back return new image - need old image
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

  if (Object.keys(player.fighterDown).length === 0 && state.turn === true) {
    const animateMoveUnitDownOne =
      useTriggerAnimate.getState().setAnimateMoveUnitDownOne;
    animateMoveUnitDownOne();
    move.play();
  }
  if (Object.keys(player.fighterDown).length === 0 && state.turn === false) {
    const animateMoveUnitDownTwo =
      useTriggerAnimate.getState().setAnimateMoveUnitDownTwo;
    animateMoveUnitDownTwo();
    move.play();
  }

  if (Object.keys(player.fighterDown).length !== 0 && state.turn === true) {
    const animateMoveUnitDownOneComeback =
      useTriggerAnimate.getState().setAnimateMoveUnitDownOneComeback;
    animateMoveUnitDownOneComeback();
    move.play();
    setTimeout(() => {
      move.play();
    }, 3000);
  }
  if (Object.keys(player.fighterDown).length !== 0 && state.turn === false) {
    const animateMoveUnitDownTwoComeback =
      useTriggerAnimate.getState().setAnimateMoveUnitDownTwoComeback;
    animateMoveUnitDownTwoComeback();
    move.play();
    setTimeout(() => {
      move.play();
    }, 3000);
  }

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
