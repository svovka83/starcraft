"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Army, Battleground } from ".";
import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const BattlegroundLine: React.FC<Props> = ({ className }) => {
  const armyOneUnits = useGameStore((state) => state.one.army);
  const armyTwoUnits = useGameStore((state) => state.two.army);
  const battlegroundOneUnits = useGameStore((state) => state.one.battleground);
  const battlegroundTwoUnits = useGameStore((state) => state.two.battleground);

  return (
    <div className={cn("flex h-[36vh] border", className)}>
      <Army armyUnits={armyOneUnits} />
      <Battleground battlegroundUnits={battlegroundOneUnits}  />
      <Battleground battlegroundUnits={battlegroundTwoUnits} />
      <Army armyUnits={armyTwoUnits} />
    </div>
  );
};
