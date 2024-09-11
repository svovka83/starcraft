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
  GameBackground,
} from "@/components/shared";
import { useGameStore } from "@/store/game";
import { useRouter } from "next/navigation";
import { isGame } from "@/service/game";

export default function Game() {
  const route = useRouter();

  isGame().then(({ success }) => {
    if (!success) {
      return route.push("/");
    }
  });

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

  const [gameOver, setGameOver] = React.useState(false);

  if (bossOne <= 0 || bossTwo <= 0) {
    setTimeout(() => {
      setGameOver(true);
    }, 3000);
  }

  React.useEffect(() => {
    getGame();
  }, []);

  return (
    <div>
      <GameHeader />
      <div>
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
        <GameBackground />
      </div>
      <HideTurn />
      <FightUnitUp />
      <FightUnitDown />
      <FightBoss />
      <FightWorker />
      <GameOver gameOver={gameOver} setGameOver={setGameOver} />
      <div className="fixed w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 bg-slate-950 -z-50"></div>
    </div>
  );
}
