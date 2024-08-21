"use client";

import {
  GameHeader,
  HideTurn,
  Minerals,
  Staff,
  Battleground,
  FighterUp,
  FighterDown,
  ShopMainOne,
  ShopMainTwo,
  FightUnitUp,
  FightBoss,
  FightUnitDown,
  FightWorker,
} from "@/components/shared";
import { useGameStore } from "@/store/game";

export default function Game() {
  const [
    battlegroundOneUnits,
    battlegroundTwoUnits,
    fighterOneUp,
    fighterTwoUp,
    fighterOneDown,
    fighterTwoDown,
    workerOne,
    mineralsOne,
    workerTwo,
    mineralsTwo,
    bossOne,
    bossTwo,
  ] = useGameStore((state) => [
    state.one.battleground,
    state.two.battleground,
    state.one.fighterUp,
    state.two.fighterUp,
    state.one.fighterDown,
    state.two.fighterDown,
    state.one.worker,
    state.one.mine,
    state.two.worker,
    state.two.mine,
    state.one.boss,
    state.two.boss,
  ]);

  if (bossOne === 0 || bossTwo === 0) {
    alert("Game Over");
    window.location.href = "/";
  }

  return (
    <>
      <div>
        <GameHeader />
        <div className="flex h-[27vh] border">
          <ShopMainOne />
          <FighterUp fighter={fighterOneUp} reverse={false} />
          <FighterUp fighter={fighterTwoUp} reverse={true} />
          <ShopMainTwo />
        </div>
        <div className="flex h-[36vh] border">
          <Battleground
            battlegroundUnits={battlegroundOneUnits}
            reverse={false}
          />
          <Staff />
          <Battleground
            battlegroundUnits={battlegroundTwoUnits}
            reverse={true}
          />
        </div>
        <div className="flex h-[27vh] border">
          <Minerals worker={workerOne} mine={mineralsOne} reverse={false} />
          <FighterDown fighter={fighterOneDown} reverse={false} />
          <FighterDown fighter={fighterTwoDown} reverse={true} />
          <Minerals worker={workerTwo} mine={mineralsTwo} reverse={true} />
        </div>
        <HideTurn />
        <FightUnitUp />
        <FightUnitDown />
        <FightBoss />
        <FightWorker />
      </div>
    </>
  );
}
