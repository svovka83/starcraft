import { GameState } from "../game";
import { isUnitBattleId, randomUnitIdAI } from "../../functions";
import { finish_turn } from "@/constants";

export function logicAI(state: GameState, get: () => GameState) {
  if (state.one.boss === 0) return state;

  if (state.two.mana === 0) {
    // make fix
    finish_turn.play();
    return {
      ["two"]: {
        ...state.two,
        mana: state.two.currentMana,
      },
      turn: !state.turn,
      message: "change turn",
    };
  }

  // function for buyUnit
  const unitIdRandom = randomUnitIdAI(state.two.currentMana, get().two.units);

  const unitMana = get().two.units.find(
    // need push to randomUnitIdAI
    (unit) => unit.id === unitIdRandom
  )?.mana;

  const unitPrice = get().two.units.find(
    // need push to randomUnitIdAI
    (unit) => unit.id === unitIdRandom
  )?.price;

  // code for moveUnitUp or moveUnitDown
  const battleUnitId = isUnitBattleId(state.two.battleground.length, get);

  const battleMana = get().two.battleground.find(
    // need push to battleUnitId
    (unit) => unit.id === battleUnitId
  )?.mana;

  // **********************
  // DEFENDER AI worker
  // **********************
  // **********************
  // if need fight unit down
  // **********************
  if (
    state.two.worker.length < 2 &&
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
    battleUnitId !== null &&
    state.two.mana >= battleMana!
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
    state.two.worker.length < 4 &&
    state.one.fighterDown.name &&
    !state.two.fighterDown.name &&
    battleUnitId === null &&
    state.two.mana >= unitMana! &&
    state.two.minerals >= unitPrice!
  ) {
    const functionAI = () => get().buyUnit(unitIdRandom);
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // if minerals finishing 1 "no workers"
  // **********************
  if (
    state.two.minerals < 3 &&
    state.two.minerals > 0 &&
    state.two.mine > 0 &&
    state.two.worker.length === 0
  ) {
    const functionAI = get().createWorker;
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // if minerals finishing 2 "is workers"
  // **********************
  if (state.two.minerals < 3 && state.two.minerals > 0 && state.two.mine > 0) {
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
  if (
    state.two.boss <= 15 &&
    state.one.fighterUp.name &&
    !state.two.fighterUp.name &&
    battleUnitId !== null &&
    state.two.mana >= battleMana!
  ) {
    const functionAI = () => get().moveUnitUp(battleUnitId);
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // if need defend low boss "start step"
  // **********************
  if (
    state.two.boss <= 15 &&
    state.one.fighterUp.name &&
    !state.two.fighterUp.name &&
    battleUnitId === null &&
    state.two.mana >= unitMana! &&
    state.two.minerals >= unitPrice!
  ) {
    const functionAI = () => get().buyUnit(unitIdRandom);
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // if need defend low boss "must have step"
  // **********************
  if (
    state.two.boss <= 5 &&
    state.one.fighterUp.name &&
    state.two.fighterUp.name &&
    state.two.mana >= state.two.fighterUp.mana
  ) {
    const functionAI = () => get().fightUnitUp();
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
  // if minerals to low for level two
  // **********************
  if (state.two.currentMana === 3 && state.two.minerals < 15) {
    randomFunction.push(get().addMinerals);
    randomFunction.push(get().addMinerals);
    randomFunction.push(get().addMinerals);
  }
  // **********************
  // **********************
  // if minerals to low for level three
  // **********************
  if (state.two.currentMana === 4 && state.two.minerals < 20) {
    randomFunction.push(get().addMinerals);
    randomFunction.push(get().addMinerals);
    randomFunction.push(get().addMinerals);
  }
  // **********************
  // **********************
  // if minerals to low for level four
  // **********************
  if (state.two.currentMana === 5 && state.two.minerals < 25) {
    randomFunction.push(get().addMinerals);
    randomFunction.push(get().addMinerals);
    randomFunction.push(get().addMinerals);
  }
  // **********************
  // **********************
  // if minerals too much
  // **********************
  if (state.two.minerals > 30) {
    randomFunction.pop();
  }
  // **********************

  // **********************
  // push function or upgrade base to level 2
  // **********************
  if (
    state.two.currentMana === 3 &&
    state.two.minerals >= 15 &&
    state.two.mana === 3
  ) {
    randomFunction.push(get().upgradeBaseLevelTwo);
  }
  if (
    state.two.currentMana === 3 &&
    state.two.minerals >= 20 &&
    state.two.mana === 3
  ) {
    const functionAI = () => get().upgradeBaseLevelTwo();
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // push function or upgrade base to level 3
  // **********************
  if (
    state.two.currentMana === 4 &&
    state.two.minerals >= 20 &&
    state.two.mana === 4
  ) {
    randomFunction.push(get().upgradeBaseLevelThree);
  }
  if (
    state.two.currentMana === 4 &&
    state.two.minerals >= 25 &&
    state.two.mana === 4
  ) {
    const functionAI = () => get().upgradeBaseLevelThree();
    const AI = functionAI();
    return { AI };
  }
  // **********************
  // **********************
  // upgrade base to level 4
  // **********************
  if (
    state.two.currentMana === 5 &&
    state.two.minerals >= 25 &&
    state.two.mana === 5
  ) {
    randomFunction.push(get().upgradeBaseLevelFour);
  }
  // **********************

  // check for moveUnitUp
  if (battleUnitId !== null) {
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
  // check isFightWorker
  if (!state.one.fighterDown.name && state.two.fighterDown.name) {
    randomFunction.push(() => get().fightWorker());
  }
  // **********************
  const randomIndex = Math.floor(Math.random() * randomFunction.length);
  const functionAI = randomFunction[randomIndex];

  const AI = functionAI();

  return { AI };
}
