"use client";

import React from "react";
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
  GameOver,
} from "@/components/shared";
import { useGameStore } from "@/store/game";

export default function Game() {
  const [modalOver, setModalOver] = React.useState(false);

  const [
    getGame,
    manaOne,
    manaTwo,
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
    state.setGetGame,
    state.one.mana,
    state.two.mana,
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

  if (bossOne <= 0 || bossTwo <= 0) {
    setTimeout(() => {
      setModalOver(true);
    }, 3000);
  }

  React.useEffect(() => {
    async function takeData() {
      const data = await getGame();
      return data;
    }

    takeData();
  }, []);

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
            mana={manaOne}
            reverse={false}
          />
          <Staff />
          <Battleground
            battlegroundUnits={battlegroundTwoUnits}
            mana={manaTwo}
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
        <GameOver modalOver={modalOver} setModalOver={setModalOver} />
      </div>
    </>
  );
}
