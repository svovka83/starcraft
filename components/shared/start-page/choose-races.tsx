"use client";
// need refactoring "infoType"
import React from "react";
import zerg from "/images/races/zerg.png";
import terran from "/images/races/terran.png";
import protoss from "/images/races/protoss.png";
import { infoType, unitType, useGameStore } from "@/store/game";
import {
  INFO,
  ZERG,
  TERRAN,
  PROTOSS,
  button_click,
  start_game,
} from "@/constants";
import { OpponentButton, Race, StartButtons, UserButton } from "..";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user";
import { useLevelStore } from "@/store/level";

export const ChooseRaces: React.FC = () => {
  const route = useRouter();
  const username = useUserStore().username;

  const [infoOne, setInfoOne] = React.useState<infoType>({} as infoType);
  const [infoTwo, setInfoTwo] = React.useState<infoType>({} as infoType);
  const [playerOne, setPlayerOne] = React.useState<unitType[]>([]);
  const [playerTwo, setPlayerTwo] = React.useState<unitType[]>([]);
  const [active, setActive] = React.useState<string>("");
  const [currentPlayer, setCurrentPlayer] = React.useState(
    "playerOne" || "playerTwo"
  );
  const [chooseOne, chooseTwo, setCreateGame, refreshState, gameMode] =
    useGameStore((state) => [
      state.chooseOne,
      state.chooseTwo,
      state.setCreateGame,
      state.refreshState,
      state.gameMode,
    ]);
  const { currentMana } = useLevelStore().level;

  const createGame = () => {
    button_click.play();
    refreshState();
    setCreateGame(
      infoOne,
      infoTwo,
      playerOne,
      playerTwo,
      gameMode,
      currentMana
    ).then(() => {
      route.push("/game");
      start_game.play();
    });
  };

  return (
    <div>
      <div className="flex justify-between mb-8">
        <UserButton
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />

        <div className="flex flex-row gap-8">
          <Race
            nameRace={INFO[0].name}
            avatarRace={INFO[0].avatar}
            chooseOne={chooseOne}
            chooseTwo={chooseTwo}
            active={active}
            setActive={setActive}
            infoRace={INFO[0]}
            setInfoOne={setInfoOne}
            setInfoTwo={setInfoTwo}
            race={TERRAN}
            setPlayerOne={setPlayerOne}
            setPlayerTwo={setPlayerTwo}
            currentPlayer={currentPlayer}
            src={terran}
          />
          <Race
            nameRace={INFO[1].name}
            avatarRace={INFO[1].avatar}
            chooseOne={chooseOne}
            chooseTwo={chooseTwo}
            active={active}
            setActive={setActive}
            infoRace={INFO[1]}
            setInfoOne={setInfoOne}
            setInfoTwo={setInfoTwo}
            race={ZERG}
            setPlayerOne={setPlayerOne}
            setPlayerTwo={setPlayerTwo}
            currentPlayer={currentPlayer}
            src={zerg}
          />
          <Race
            nameRace={INFO[2].name}
            avatarRace={INFO[2].avatar}
            chooseOne={chooseOne}
            chooseTwo={chooseTwo}
            active={active}
            setActive={setActive}
            infoRace={INFO[2]}
            setInfoOne={setInfoOne}
            setInfoTwo={setInfoTwo}
            race={PROTOSS}
            setPlayerOne={setPlayerOne}
            setPlayerTwo={setPlayerTwo}
            currentPlayer={currentPlayer}
            src={protoss}
          />
        </div>

        {username ? (
          <OpponentButton
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            gameMode={gameMode}
          />
        ) : (
          <div className="w-48"></div>
        )}
      </div>

      <StartButtons
        nameOne={infoOne.name}
        nameTwo={infoTwo.name}
        createGame={createGame}
      />
    </div>
  );
};
