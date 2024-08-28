"use client";

import React from "react";
import { useGameStore } from "@/store/game";

export const HomeHeader: React.FC = () => {
  const [nameOne, nameTwo] = useGameStore((state) => [
    state.one.info.name,
    state.two.info.name,
  ]);

  return (
    <div className="grid grid-cols-3 items-center justify-around">
      <span className="text-start ml-8 text-[28px] text-white font-bold">
        {nameOne ? nameOne : "Choose Race"}
      </span>
      <h1 className="text-[90px] text-violet-700 font-bold mx-auto">
        StarCraft
      </h1>
      <span className="text-end mr-8 text-[28px] text-white font-bold">
        {nameTwo ? nameTwo : "Choose Race"}
      </span>
    </div>
  );
};
