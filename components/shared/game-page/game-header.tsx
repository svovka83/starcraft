import React from "react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";
import { ChangeValue } from "..";

interface Props {
  className?: string;
}

export const GameHeader: React.FC<Props> = ({ className }) => {
  const [mineralOne, mineralTwo, priceOne, priceTwo, turn] = useGameStore(
    (state) => [
      state.one.minerals,
      state.two.minerals,
      state.one.battleground[state.one.battleground.length - 1]?.price,
      state.two.battleground[state.two.battleground.length - 1]?.price,
      state.turn,
    ]
  );

  return (
    <header
      className={cn(
        "border h-[10vh] flex items-center justify-between text-[24px] font-extrabold px-2 shadow-lg shadow-black/10 z-50",
        className
      )}
    >
      <div className="relative mr-8">
        <span>Minerals: {mineralOne}</span>
        <ChangeValue
          value={priceOne}
          key={mineralOne}
          className="absolute -top-2 -right-6 text-blue-700"
        />
      </div>
      <span>ManaOne: 3</span>
      <span
        className={cn("uppercase", turn ? "text-red-500" : "text-blue-500")}
      >
        {turn ? "Player One" : "Player Two"}
      </span>
      <span>ManaTwo: 3</span>
      <div className="relative mr-8">
        <span>Minerals: {mineralOne}</span>
        <ChangeValue
          value={priceTwo}
          key={mineralTwo}
          className="absolute -top-2 -right-6 text-blue-700"
        />
      </div>
    </header>
  );
};
