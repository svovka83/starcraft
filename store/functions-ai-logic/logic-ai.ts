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
  // DEFENDER AI worker
  // **********************
  // **********************
  // if need fight unit down
  // **********************
  if (
    state.two.worker.length < 3 &&
    state.one.fighterDown.name &&
    state.two.fighterDown.name &&
    state.two.mana >= state.two.fighterDown.mana
  ) {
    const functionAI = () => get().fightUnitDown();
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // if need save workers finish action
  // **********************
  if (
    state.two.worker.length < 3 &&
    state.one.fighterDown.name &&
    !state.two.fighterDown.name &&
    battleUnitId !== 0 &&
    state.two.mana >= state.two.battleground[0].mana
  ) {
    const functionAI = () => get().moveUnitDown(battleUnitId);
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // if need save workers start action
  // **********************
  if (
    state.two.worker.length < 3 &&
    state.one.fighterDown.name &&
    !state.two.fighterDown.name &&
    battleUnitId === 0
  ) {
    const functionAI = () => get().buyUnit(unitIdRandom);
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // if minerals finishing
  // **********************
  if (state.two.minerals <= 3) {
    const randomFunction = [get().createWorker, get().addMinerals];
    const randomIndex = Math.floor(Math.random() * randomFunction.length);
    const functionAI = randomFunction[randomIndex];
    const AI = functionAI();
    return { AI };
  }
  // **********************

  // **********************
  // ATTACKER AI
  // **********************
  // **********************
  // if way to boss is empty
  // **********************
  if (
    !state.one.fighterUp.name &&
    state.two.fighterUp.name &&
    state.two.mana >= state.two.fighterUp.mana
  ) {
    const functionAI = () => get().fightBoss();
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // if unit up is strongest
  // **********************
  if (
    state.one.fighterUp.name &&
    state.two.fighterUp.name &&
    state.two.fighterUp.attack >= state.one.fighterUp.health &&
    state.two.mana >= state.two.fighterUp.mana
  ) {
    const functionAI = () => get().fightUnitUp();
    const AI = functionAI();
    return { AI };
  }
  // **********************

  // **********************
  // DEFENDER AI BOSS
  // **********************
  // **********************
  // if need defend low boss "finish step"
  // **********************
  if (state.two.boss < 10 && !state.two.fighterUp.name && battleUnitId !== 0) {
    const functionAI = () => get().moveUnitUp(battleUnitId);
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // if need defend low boss "start step"
  // **********************
  if (state.two.boss < 10 && !state.two.fighterUp.name && battleUnitId === 0) {
    const randomFunction = [() => get().buyUnit(unitIdRandom)];
    const randomIndex = Math.floor(Math.random() * randomFunction.length);
    // here must be push one more function (comeback unitDown - need create)
    // here must be push one more function (comeback unitDown - need create)
    // here must be push one more function (comeback unitDown - need create)
    const functionAI = randomFunction[randomIndex];
    const AI = functionAI();
    return { AI };
  }
  // **********************

  // **********************
  const randomFunction = [
    () => get().buyUnit(unitIdRandom),
    get().createWorker,
    get().addMinerals,
  ];
  // **********************

  // **********************
  // if minerals too much
  // **********************
  if (state.two.minerals > 15) {
    randomFunction.pop();
  }
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
