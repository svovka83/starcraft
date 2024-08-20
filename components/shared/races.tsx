"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import zerg from "/images/races/zerg.png";
import terran from "/images/races/terran.png";
import protoss from "/images/races/protoss.png";
import { useGameStore } from "@/store/game";
import { unitType } from "@/store/game";
import { ZERG } from "@/constants/zerg";
import { TERRAN } from "@/constants/terran";
import { PROTOSS } from "@/constants/protoss";

interface Props {
  className?: string;
}

export const Races: React.FC<Props> = ({ className }) => {
  const Races = useGameStore((state) => state.chooseRaceOne);

  const chooseRace = (CONTENT: unitType[]) => {
    Races(CONTENT);
    console.log(CONTENT);
  };

  return (
    <div
      className={cn("flex items-center justify-around mx-20 mb-8", className)}
    >
      <div className="cursor-pointer" onClick={() => chooseRace(TERRAN)}>
        <Image src={terran} className="w-[35vh] h-[55vh]" alt="terran" />
        <p className="text-[28px] text-blue-700  font-extrabold">Terran</p>
      </div>
      <div className="cursor-pointer" onClick={() => chooseRace(ZERG)}>
        <Image src={zerg} className="w-[35vh] h-[55vh]" alt="zerg" />
        <p className="text-[28px] text-red-700 font-extrabold">Zerg</p>
      </div>
      <div className="cursor-pointer" onClick={() => chooseRace(PROTOSS)}>
        <Image src={protoss} className="w-[35vh] h-[55vh]" alt="protoss" />
        <p className="text-[28px] text-yellow-700  font-extrabold">Protoss</p>
      </div>
    </div>
  );
};

