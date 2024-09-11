"use client";

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

export const ChooseRaces: React.FC = () => {
  const route = useRouter();

  const [infoOne, setInfoOne] = React.useState<infoType>({} as infoType);
  const [infoTwo, setInfoTwo] = React.useState<infoType>({} as infoType);
  const [playerOne, setPlayerOne] = React.useState<unitType[]>([]);
  const [playerTwo, setPlayerTwo] = React.useState<unitType[]>([]);
  const [active, setActive] = React.useState<string>("");
  const [currentPlayer, setCurrentPlayer] = React.useState(
    "playerOne" || "playerTwo"
  );
  const [chooseOne, chooseTwo, setCreateGame, gameMode] = useGameStore(
    (state) => [
      state.chooseOne,
      state.chooseTwo,
      state.setCreateGame,
      state.gameMode,
    ]
  );

  const createGame = () => {
    button_click.play();
    setCreateGame(infoOne, infoTwo, playerOne, playerTwo, gameMode).then(() => {
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

        <OpponentButton
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          gameMode={gameMode}
        />
      </div>

      <StartButtons
        nameOne={infoOne.name}
        nameTwo={infoTwo.name}
        createGame={createGame}
      />
    </div>
  );
};
