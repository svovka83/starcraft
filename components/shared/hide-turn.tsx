"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const HideTurn: React.FC<Props> = ({ className }) => {
  const turn = useGameStore((state) => state.turn);

  return (
    <div
      className={cn(
        turn ? "w-[590px] left-[50%] text-red-500" : "w-[590px] right-[50%] text-blue-500",
        "fixed top-[10vh] bottom-0 translate-y-3 flex justify-center items-center text-5xl font-extrabold transition-all hover:bg-black/0 hover:translate-y-0 hover:duration-300 ease-in cursor-pointer z-30",
        className
      )}
    >
      {turn ? "Player One Turn" : "Player Two Turn"}
    </div>
  );
};
