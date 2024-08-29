"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../../ui";
import zerg from "/images/races/zerg.png";
import terran from "/images/races/terran.png";
import protoss from "/images/races/protoss.png";
import { infoType, unitType, useGameStore } from "@/store/game";
import { INFO, ZERG, TERRAN, PROTOSS } from "@/constants";
import { StartButtons } from "..";

export const ChooseRaces: React.FC = () => {
  const [infoOne, setInfoOne] = React.useState<infoType>({} as infoType);
  const [infoTwo, setInfoTwo] = React.useState<infoType>({} as infoType);
  const [playerOne, setPlayerOne] = React.useState<unitType[]>([]);
  const [playerTwo, setPlayerTwo] = React.useState<unitType[]>([]);
  const [active, setActive] = React.useState<string>("");
  const [currentPlayer, setCurrentPlayer] = React.useState(
    "playerOne" || "playerTwo"
  );
  const [chooseOne, chooseTwo, setCreateGame] = useGameStore((state) => [
    state.chooseOne,
    state.chooseTwo,
    state.setCreateGame,
  ]);

  return (
    <div>
      <div className="flex justify-between mb-8">
        <Button
          className={cn("ml-2 border-2 border-blue-600", {
            "border-2 border-white": currentPlayer === "playerOne",
          })}
          onClick={() => setCurrentPlayer("playerOne")}
        >
          Player 1
        </Button>

        <div
          className="cursor-pointer"
          onClick={() => {
            setActive(INFO[0].name);
            if (currentPlayer === "playerOne") {
              setInfoOne(INFO[0]);
              setPlayerOne(TERRAN);
              chooseOne(INFO[0].name);
            } else {
              setInfoTwo(INFO[0]);
              setPlayerTwo(TERRAN);
              chooseTwo(INFO[0].name);
            }
          }}
        >
          <Image
            src={terran}
            className={cn("w-[35vh] h-[55vh]", {
              "border-2 border-white": active === INFO[0].name,
            })}
            alt="terran"
          />
          <p className="text-[28px] text-blue-700  font-extrabold">Terran</p>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setActive(INFO[1].name);
            if (currentPlayer === "playerOne") {
              setInfoOne(INFO[1]);
              setPlayerOne(ZERG);
              chooseOne(INFO[1].name);
            } else {
              setInfoTwo(INFO[1]);
              setPlayerTwo(ZERG);
              chooseTwo(INFO[1].name);
            }
          }}
        >
          <Image
            src={zerg}
            className={cn("w-[35vh] h-[55vh]", {
              "border-2 border-white": active === INFO[1].name,
            })}
            alt="zerg"
          />
          <p className="text-[28px] text-red-700 font-extrabold">Zerg</p>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setActive(INFO[2].name);
            if (currentPlayer === "playerOne") {
              setInfoOne(INFO[2]);
              setPlayerOne(PROTOSS);
              chooseOne(INFO[2].name);
            } else {
              setInfoTwo(INFO[2]);
              setPlayerTwo(PROTOSS);
              chooseTwo(INFO[2].name);
            }
          }}
        >
          <Image
            src={protoss}
            className={cn("w-[35vh] h-[55vh]", {
              "border-2 border-white": active === INFO[2].name,
            })}
            alt="protoss"
          />
          <p className="text-[28px] text-yellow-700  font-extrabold">Protoss</p>
        </div>

        <Button
          className={cn("mr-2 border-2 border-blue-600", {
            "border-2 border-white": currentPlayer === "playerTwo",
          })}
          onClick={() => setCurrentPlayer("playerTwo")}
        >
          Player 2
        </Button>
      </div>

      <StartButtons
        nameOne={infoOne.name}
        nameTwo={infoTwo.name}
        createGame={() => setCreateGame(infoOne, infoTwo, playerOne, playerTwo)}
      />
    </div>
  );
};
