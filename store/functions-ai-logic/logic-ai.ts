import { GameState, unitType } from "../game";
import lodash from "lodash";
import { finish_turn } from "@/constants";

export function logicAI(state: GameState, get: () => GameState) {
  if (state.two.mana === 0) {
    // make fix
    finish_turn.play();
    return {
      ["two"]: {
        ...state.two,
        mana: 3,
      },
      turn: !state.turn,
      message: "change turn",
    };
  }

  // code for buyUnit
  const unitId = get().two.units.map((unit: unitType) => unit.id!);
  const unitIdRandom = lodash.random(unitId[1], unitId[unitId.length - 1]);

  // code for moveUnitUp or moveUnitDown
  const isUnitBattleId = (battleLength: number) => {
    if (battleLength > 0) {
      const battle = get().two.battleground.map((unit: unitType) => unit);
      const randomBattleIndex = Math.floor(Math.random() * battle.length);
      const battleRandom = battle[randomBattleIndex].id!;
      return battleRandom;
    }
    return 0;
  };
  const battleUnitId = isUnitBattleId(state.two.battleground.length);

  // **********************
  const randomFunction = [
    () => get().buyUnit(unitIdRandom),
    get().createWorker,
    get().addMinerals,
  ];
  // **********************

  // check for moveUnitUp
  if (battleUnitId !== 0) {
    randomFunction.push(() => get().moveUnitUp(battleUnitId));
    randomFunction.push(() => get().moveUnitDown(battleUnitId));
  }
  // check isFightersUp
  if (state.one.fighterUp.name && state.two.fighterUp.name) {
    randomFunction.push(() => get().fightUnitUp());
  }
  if (!state.one.fighterUp.name && state.two.fighterUp.name) {
    randomFunction.push(() => get().fightBoss());
  }
  // check isFightersDown
  if (state.one.fighterDown.name && state.two.fighterDown.name) {
    randomFunction.push(() => get().fightUnitDown());
  }
  if (!state.one.fighterDown.name && state.two.fighterDown.name) {
    randomFunction.push(() => get().fightWorker());
  }

  // **********************
  const randomIndex = Math.floor(Math.random() * randomFunction.length);
  const functionAI = randomFunction[randomIndex];

  const AI = functionAI();

  return { AI };
}
