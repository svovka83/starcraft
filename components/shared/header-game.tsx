"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const HeaderGame: React.FC<Props> = ({ className }) => {
  const mineralOne = useGameStore((state) => state.one.minerals);
  const mineralTwo = useGameStore((state) => state.two.minerals);
  const turn = useGameStore((state) => state.turn);

  return (
    <header
      className={cn(
        "border h-[10vh] flex items-center justify-between text-[24px] font-extrabold px-2 shadow-lg shadow-black/10 z-50",
        className
      )}
    >
      <span>MineralsOne: {mineralOne}</span>
      <span
        className={cn("uppercase", turn ? "text-red-500" : "text-blue-500")}
      >
        {turn ? "Player One" : "Player Two"}
      </span>
      <span>MineralsTwo: {mineralTwo}</span>
    </header>
  );
};
