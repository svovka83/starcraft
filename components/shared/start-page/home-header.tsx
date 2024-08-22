"use client";

import React from "react";
import { useGameStore } from "@/store/game";

export const HomeHeader: React.FC = () => {
  const [infoOne, infoTwo] = useGameStore((state) => [
    state.one.info,
    state.two.info,
  ]);

  return (
    <div className="grid grid-cols-3 items-center justify-around">
      <span className="text-start ml-8 text-[28px] text-white font-bold">
        {infoOne ? infoOne.name : "Choose Race"}
      </span>
      <h1 className="text-[90px] text-violet-700 font-bold mx-auto">
        StarCraft
      </h1>
      <span className="text-end mr-8 text-[28px] text-white font-bold">
        {infoTwo ? infoTwo.name : "Choose Race"}
      </span>
    </div>
  );
};
