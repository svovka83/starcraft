"use client";

import React from "react";
import { useGameStore } from "@/store/game";

export const HomeHeader: React.FC = () => {
  const playerOne = useGameStore((state) => state.one);
  const playerTwo = useGameStore((state) => state.two);

  return (
    <div className="grid grid-cols-3 items-center justify-around">
      <span className="text-start ml-8 text-[28px] text-white font-bold">
        {playerOne.units[0]
          ? (playerOne.units[0].name === "KSM" && "Terran") ||
            (playerOne.units[0].name === "Drone" && "Zerg") ||
            (playerOne.units[0].name === "Probe" && "Protoss")
          : "Choose Race"}
      </span>
      <h1 className="text-[90px] text-violet-700 font-bold mx-auto">StarCraft</h1>
      <span className="text-end mr-8 text-[28px] text-white font-bold">
        {playerTwo.units[0]
          ? (playerTwo.units[0].name === "KSM" && "Terran") ||
            (playerTwo.units[0].name === "Drone" && "Zerg") ||
            (playerTwo.units[0].name === "Probe" && "Protoss")
          : "Choose Race"}
      </span>
    </div>
  );
};
