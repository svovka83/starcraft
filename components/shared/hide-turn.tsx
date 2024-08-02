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
        turn ? "left-[50%] w-[50%] text-red-500" : "right-[50%] left-0 text-blue-500",
        "fixed top-[10vh] bottom-0 translate-y-3 flex justify-center items-center text-5xl font-extrabold transition hover:bg-black/5 hover:translate-y-0 hover:duration-300 ease-in cursor-pointer z-30",
        className
      )}
    >
      {turn ? "Player One Turn" : "Player Two Turn"}
    </div>
  );
};
