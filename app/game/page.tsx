"use client";

import React from "react";
import { cn } from "@/lib/utils";

import {
  HeaderGame,
  HideTurn,
  Minerals,
  Staff,
  Battleground,
  Fighter,
  ShopMainOne,
  ShopMainTwo,
  FightUnit,
  FightBoss,
} from "@/components/shared";
import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export default function Game({ className }: Props) {
  const battlegroundOneUnits = useGameStore((state) => state.one.battleground);
  const battlegroundTwoUnits = useGameStore((state) => state.two.battleground);
  const fighterOne = useGameStore((state) => state.one.fighter);
  const fighterTwo = useGameStore((state) => state.two.fighter);
  const workerOne = useGameStore((state) => state.one.worker);
  const mineOne = useGameStore((state) => state.one.mine);
  const workerTwo = useGameStore((state) => state.two.worker);
  const mineTwo = useGameStore((state) => state.two.mine);
  return (
    <>
      <div>
        <HeaderGame />
        <div className={cn("flex h-[26vh] border", className)}>
          <ShopMainOne />
          <Fighter fighter={fighterOne} />
          <Fighter fighter={fighterTwo} />
          <ShopMainTwo />
        </div>
        <div className={cn("flex h-[36vh] border", className)}>
          <Battleground battlegroundUnits={battlegroundOneUnits} />
          <Staff />
          <Battleground battlegroundUnits={battlegroundTwoUnits} />
        </div>
        <div className={cn("flex h-[28vh] border", className)}>
          <Minerals worker={workerOne} mine={mineOne} />
          <Staff />
          <Staff />
          <Minerals worker={workerTwo} mine={mineTwo} />
        </div>
        <HideTurn />
        <FightUnit />
        <FightBoss />
      </div>
    </>
  );
}
