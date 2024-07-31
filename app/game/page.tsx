"use client";

import React from "react";
import { cn } from "@/lib/utils";

import {
  HeaderGame,
  ShopFighterLine,
  MineralsLine,
  HideTurn,
} from "@/components/shared";
import { useGameStore } from "@/store/game";

import { Army, Battleground } from "@/components/shared";

interface Props {
  className?: string;
}

export default function Game({ className }: Props) {
  const armyOneUnits = useGameStore((state) => state.one.army);
  const armyTwoUnits = useGameStore((state) => state.two.army);
  const battlegroundOneUnits = useGameStore((state) => state.one.battleground);
  const battlegroundTwoUnits = useGameStore((state) => state.two.battleground);
  return (
    <>
      <div>
        <HeaderGame />
        <ShopFighterLine />
        <div className={cn("flex h-[36vh] border", className)}>
          <Army armyUnits={armyOneUnits} />
          <Battleground battlegroundUnits={battlegroundOneUnits} />
          <Battleground battlegroundUnits={battlegroundTwoUnits} />
          <Army armyUnits={armyTwoUnits} />
        </div>
        <MineralsLine />
        <HideTurn />
      </div>
    </>
  );
}
