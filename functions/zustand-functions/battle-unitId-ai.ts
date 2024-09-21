import { GameState } from "@/store/game";

export const isUnitBattleId = (battleLength: number, get: () => GameState) => {
  const battle = get().two.battleground;

  if (battleLength > 0) {
    const randomBattleIndex = Math.floor(Math.random() * battle.length);
    const battleRandom = battle[randomBattleIndex].id!;
    return battleRandom;
  }
  return null;
};
