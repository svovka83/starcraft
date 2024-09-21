import React from "react";
import { useGameStore } from "@/store/game";
import { ManaCounter, Menu, MineralsCounter } from "../..";
import { useTriggerAnimate } from "@/store/trigger-animations";
import { useUserStore } from "@/store/user";

export const GameHeader: React.FC = () => {
  const playerName = useUserStore().username;

  const [
    isAnimateMineralOne,
    isAnimateMineralTwo,
    isAnimateBuyWorkerOne,
    isAnimateBuyWorkerTwo,
    isAnimateBuyUnitOne,
    isAnimateBuyUnitTwo,
    unitIdOne,
    unitIdTwo,
  ] = useTriggerAnimate((state) => [
    state.isAnimateMineralOne,
    state.isAnimateMineralTwo,
    state.isAnimateBuyWorkerOne,
    state.isAnimateBuyWorkerTwo,
    state.isAnimateBuyUnitOne,
    state.isAnimateBuyUnitTwo,
    state.unitIdOne,
    state.unitIdTwo,
  ]);

  const [
    gameMode,
    manaOne,
    manaTwo,
    mineralOne,
    mineralTwo,
    lengthOne,
    lengthTwo,
    unitsOne,
    unitsTwo,
  ] = useGameStore((state) => [
    state.gameMode,
    state.one.mana,
    state.two.mana,
    state.one.minerals,
    state.two.minerals,
    state.one.worker.length,
    state.two.worker.length,
    state.one.units,
    state.two.units,
  ]);

  const opponent = gameMode === "COMPUTER" ? "Computer" : "Player 2";

  const priceOne = unitsOne.find((unit) => unit.id === unitIdOne)?.price || 0;
  const priceTwo = unitsTwo.find((unit) => unit.id === unitIdTwo)?.price || 0;

  return (
    <header className="grid grid-cols-5 items-center text-center bg-amber-500 border h-[10vh] text-[24px] font-extrabold px-2 shadow-xl shadow-black/90 z-50">
      <MineralsCounter
        currentMinerals={mineralOne}
        workersQuantity={lengthOne}
        unitPrice={priceOne}
        isAnimateMineral={isAnimateMineralOne}
        isAnimateBuyWorker={isAnimateBuyWorkerOne}
        isAnimateBuyUnit={isAnimateBuyUnitOne}
      />

      <ManaCounter name={playerName} currentMana={manaOne} />

      <Menu />

      <ManaCounter name={opponent} currentMana={manaTwo} />

      <MineralsCounter
        currentMinerals={mineralTwo}
        workersQuantity={lengthTwo}
        unitPrice={priceTwo}
        isAnimateMineral={isAnimateMineralTwo}
        isAnimateBuyWorker={isAnimateBuyWorkerTwo}
        isAnimateBuyUnit={isAnimateBuyUnitTwo}
      />
    </header>
  );
};
