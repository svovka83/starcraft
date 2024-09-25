"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { starcraft_fon_1, starcraft_fon_2 } from "@/constants";

export const HomeHeader: React.FC = () => {
  const username = useUserStore().username;
  const [nameOne, nameTwo] = useGameStore((state) => [
    state.one.name,
    state.two.name,
  ]);

  starcraft_fon_1.stop(); // ???
  starcraft_fon_2.stop(); // ???

  return (
    <div className="grid grid-cols-3 items-center justify-around pointer-events-none">
      <span
        className={cn("text-start ml-8 text-[28px] text-white font-bold", {
          "text-blue-600": nameOne === "Terran",
          "text-red-600": nameOne === "Zerg",
          "text-orange-600": nameOne === "Protoss",
        })}
      >
        {nameOne ? nameOne : "Choose Race"}
      </span>
      <h1 className="text-[90px] text-violet-700 font-bold mx-auto">
        StarCraft
      </h1>
      {username && (
        <span
          className={cn("text-end ml-8 text-[28px] text-white font-bold", {
            "text-blue-600": nameTwo === "Terran",
            "text-red-600": nameTwo === "Zerg",
            "text-orange-600": nameTwo === "Protoss",
          })}
        >
          {nameTwo ? nameTwo : "Choose Race"}
        </span>
      )}
    </div>
  );
};
