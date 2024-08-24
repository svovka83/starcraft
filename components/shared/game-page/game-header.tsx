import React from "react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";
import { ChangeValue } from "..";

interface Props {
  className?: string;
}

export const GameHeader: React.FC<Props> = ({ className }) => {
  const [
    manaOne,
    manaTwo,
    mineralOne,
    mineralTwo,
    mineOne,
    mineTwo,
    lengthOne,
    lengthTwo,
    turn,
  ] = useGameStore((state) => [
    state.one.mana,
    state.two.mana,
    state.one.minerals,
    state.two.minerals,
    state.one.mine,
    state.two.mine,
    state.one.worker.length,
    state.two.worker.length,
    state.turn,
  ]);

  return (
    <header
      className={cn(
        "border h-[10vh] flex items-center justify-between text-[24px] font-extrabold px-2 shadow-lg shadow-black/10 z-50",
        className
      )}
    >
      <div className="relative mr-6">
        <span>Minerals: {mineralOne}</span>
        <ChangeValue
          sign="+"
          value={lengthOne}
          key={mineOne}
          className="absolute -top-2 -right-7 text-blue-700"
        />
        <ChangeValue
          sign="-"
          value={1}
          key={lengthOne}
          className="absolute -top-2 -right-7 text-blue-700"
        />
      </div>
      <span>ManaOne: {manaOne}</span>
      <span
        className={cn("uppercase", turn ? "text-red-500" : "text-blue-500")}
      >
        {turn ? "Player One" : "Player Two"}
      </span>
      <span>ManaTwo: {manaTwo}</span>
      <div className="relative mr-6">
        <span>Minerals: {mineralTwo}</span>
        <ChangeValue
          sign="+"
          value={lengthTwo}
          key={mineTwo}
          className="absolute -top-2 -right-7 text-blue-700"
        />
        <ChangeValue
          sign="-"
          value={1}
          key={lengthTwo}
          className="absolute -top-2 -right-7 text-blue-700"
        />
      </div>
    </header>
  );
};
