"use client";

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

export default function Game() {
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
        <div className="flex h-[26vh] border">
          <ShopMainOne />
          <Fighter fighter={fighterOne} />
          <Fighter fighter={fighterTwo} />
          <ShopMainTwo />
        </div>
        <div className="flex h-[36vh] border">
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
        <div className="flex h-[28vh] border">
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
