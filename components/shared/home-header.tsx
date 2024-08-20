"use client";

import React from "react";
import { useGameStore } from "@/store/game";

export const HomeHeader: React.FC = () => {
  const playerOne = useGameStore((state) => state.one);
  const playerTwo = useGameStore((state) => state.two);

  return (
    <div className="flex items-center justify-around">
      <span className="text-[28px] text-white font-bold">
        {playerOne.units[0] ? playerOne.units[0].name : "Choose Race"}
      </span>
      <h1 className="text-[110px] flex-1 text-violet-700 font-bold">StarCraft</h1>
      <span className="text-white">Terran</span>
    </div>
  );
};
