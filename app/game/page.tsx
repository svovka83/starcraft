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
  const [
    battlegroundOneUnits,
    battlegroundTwoUnits,
    fighterOne,
    fighterTwo,
    workerOne,
    mineOne,
    workerTwo,
    mineTwo,
  ] = useGameStore((state) => [
    state.one.battleground,
    state.two.battleground,
    state.one.fighter,
    state.two.fighter,
    state.one.worker,
    state.one.mine,
    state.two.worker,
    state.two.mine,
  ]);

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
          <Battleground
            battlegroundUnits={battlegroundOneUnits}
            className="flex-row"
          />
          <Staff />
          <Battleground
            battlegroundUnits={battlegroundTwoUnits}
            className="flex-row-reverse"
          />
        </div>
        <div className={cn("flex h-[28vh] border", className)}>
          <Minerals worker={workerOne} mine={mineOne} className="justify-end" />
          <Staff />
          <Staff />
          <Minerals
            worker={workerTwo}
            mine={mineTwo}
            className="justify-start"
          />
        </div>
        <HideTurn />
        <FightUnit />
        <FightBoss />
      </div>
    </>
  );
}
