import { unitType } from "@/store/game";
import lodash from "lodash";

export const randomUnitIdAI = (currentMana: number, units: unitType[]) => {
  let unitId: number[] = [];

  if (currentMana === 3) {
    unitId = units.map((unit: unitType) => unit.id!).slice(0, 4);
  } else if (currentMana === 4) {
    unitId = units.map((unit: unitType) => unit.id!).slice(0, 7);
  } else if (currentMana === 5) {
    unitId = units.map((unit: unitType) => unit.id!).slice(0, 9);
  } else if (currentMana === 6) {
    unitId = units.map((unit: unitType) => unit.id!).slice(0, 10);
  }

  const unitIdRandom = lodash.random(unitId[1], unitId[unitId.length - 1]);

  return unitIdRandom;
};
