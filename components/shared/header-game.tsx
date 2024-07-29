"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const HeaderGame: React.FC<Props> = ({ className }) => {
  const minerals = useGameStore((state) => state.one.minerals);

  return (
    <header
      className={cn(
        "border h-[10vh] flex items-center justify-between text-[24px] font-extrabold px-2  shadow-lg shadow-black/10",
        className
      )}
    >
      <span>MineralsOne: {minerals}</span>
      <span className="uppercase">turn</span>
      <span>MineralsTwo: 10</span>
    </header>
  );
};
