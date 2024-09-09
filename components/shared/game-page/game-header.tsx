import React from "react";
import { useGameStore } from "@/store/game";
import { ChangeValue, Menu } from "..";
import { useTriggerAnimate } from "@/store/trigger-animations";
import { coin_drop } from "@/constants";

export const GameHeader: React.FC = () => {
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
    manaOne,
    manaTwo,
    mineralOne,
    mineralTwo,
    lengthOne,
    lengthTwo,
    unitsOne,
    unitsTwo,
  ] = useGameStore((state) => [
    state.one.mana,
    state.two.mana,
    state.one.minerals,
    state.two.minerals,
    state.one.worker.length,
    state.two.worker.length,
    state.one.units,
    state.two.units,
  ]);

  const priceOne = unitsOne.find((unit) => unit.id === unitIdOne)?.price || 0;
  const priceTwo = unitsTwo.find((unit) => unit.id === unitIdTwo)?.price || 0;

  return (
    <header className="border h-[10vh] flex items-center justify-between text-[24px] font-extrabold px-2 shadow-lg shadow-black/10 z-50">
      <div className="relative mr-6">
        <span>Minerals: {mineralOne}</span>
        <ChangeValue
          sign="+"
          value={lengthOne}
          effect={coin_drop}
          isAnimate={isAnimateMineralOne}
          className="absolute -top-2 -right-7 text-blue-700"
        />
        <ChangeValue
          sign="-"
          value={1}
          effect={coin_drop}
          isAnimate={isAnimateBuyWorkerOne}
          className="absolute -top-2 -right-7 text-red-500"
        />
        <ChangeValue
          sign="-"
          value={priceOne}
          effect={coin_drop}
          isAnimate={isAnimateBuyUnitOne}
          className="absolute -top-2 -right-7 text-red-500"
        />
      </div>
      <span>ManaOne: {manaOne}</span>

      <Menu />

      <span>ManaTwo: {manaTwo}</span>
      <div className="relative mr-6">
        <span>Minerals: {mineralTwo}</span>
        <ChangeValue
          sign="+"
          value={lengthTwo}
          effect={coin_drop}
          isAnimate={isAnimateMineralTwo}
          className="absolute -top-2 -right-7 text-blue-700"
        />
        <ChangeValue
          sign="-"
          value={1}
          effect={coin_drop}
          isAnimate={isAnimateBuyWorkerTwo}
          className="absolute -top-2 -right-7 text-red-500"
        />
        <ChangeValue
          sign="-"
          value={priceTwo}
          effect={coin_drop}
          isAnimate={isAnimateBuyUnitTwo}
          className="absolute -top-2 -right-7 text-red-500"
        />
      </div>
    </header>
  );
};
