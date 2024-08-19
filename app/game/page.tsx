"use client";

import {
  HeaderGame,
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
  ]);

  console.log(workerTwo.length)

  return (
    <>
      <div>
        <HeaderGame />
        <div className="flex h-[27vh] border">
          <ShopMainOne />
          <FighterUp fighter={fighterOneUp} />
          <FighterUp fighter={fighterTwoUp} />
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
        <div className="flex h-[27vh] border">
          <Minerals
            worker={workerOne}
            mine={mineralsOne}
            className="justify-end"
          />
          <FighterDown fighter={fighterOneDown} />
          <FighterDown fighter={fighterTwoDown} />
          <Minerals
            worker={workerTwo}
            mine={mineralsTwo}
            className="justify-start"
          />
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
