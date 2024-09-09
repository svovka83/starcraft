import { GameState } from "../game";
import { manaCounter } from "@/functions";
import { useTriggerAnimate } from "../trigger-animations";
import { move } from "@/constants";
// not finished - when unit come back return new image - need old image
export function moveUnitUp(state: GameState, unitId: number) {
  const player = state.turn ? state.one : state.two;

  const addUnit = player.battleground.find((unit) => unit.id === unitId);

  const mana = manaCounter(player.mana, addUnit!.mana);
  if (mana < 0) return state;

  const removeUnit = player.battleground.filter((unit) => unit.id !== unitId);
  const returnFighter =
    Object.keys(player.fighterUp).length !== 0
      ? [...removeUnit, player.fighterUp]
      : removeUnit;

  if (Object.keys(player.fighterUp).length === 0 && state.turn === true) {
    const animateMoveUnitUpOne =
      useTriggerAnimate.getState().setAnimateMoveUnitUpOne;
    animateMoveUnitUpOne();
    move.play();
  }
  if (Object.keys(player.fighterUp).length === 0 && state.turn === false) {
    const animateMoveUnitUpTwo =
      useTriggerAnimate.getState().setAnimateMoveUnitUpTwo;
    animateMoveUnitUpTwo();
    move.play();
  }

  if (Object.keys(player.fighterUp).length !== 0 && state.turn === true) {
    const animateMoveUnitUpOneComeback =
      useTriggerAnimate.getState().setAnimateMoveUnitUpOneComeback;
    animateMoveUnitUpOneComeback();
    move.play();
    setTimeout(() => {
      move.play();
    }, 3000);
  }
  if (Object.keys(player.fighterUp).length !== 0 && state.turn === false) {
    const animateMoveUnitUpTwoComeback =
      useTriggerAnimate.getState().setAnimateMoveUnitUpTwoComeback;
    animateMoveUnitUpTwoComeback();
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
      fighterUp: addUnit,
    },
    message: `${addUnit!.name} going up`,
  };
}
