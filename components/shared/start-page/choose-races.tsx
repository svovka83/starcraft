"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../../ui";
import zerg from "/images/races/zerg.png";
import terran from "/images/races/terran.png";
import protoss from "/images/races/protoss.png";
import { infoType, unitType, useGameStore } from "@/store/game";
import { ZERG, INFO_Z } from "@/constants/zerg";
import { TERRAN, INFO_T } from "@/constants/terran";
import { PROTOSS, INFO_P } from "@/constants/protoss";
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
            setActive(INFO_T.name);
            if (currentPlayer === "playerOne") {
              setInfoOne(INFO_T);
              setPlayerOne(TERRAN);
              chooseOne(INFO_T);
            } else {
              setInfoTwo(INFO_T);
              setPlayerTwo(TERRAN);
              chooseTwo(INFO_T);
            }
          }}
        >
          <Image
            src={terran}
            className={cn("w-[35vh] h-[55vh]", {
              "border-2 border-white": active === INFO_T.name,
            })}
            alt="terran"
          />
          <p className="text-[28px] text-blue-700  font-extrabold">Terran</p>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setActive(INFO_Z.name);
            if (currentPlayer === "playerOne") {
              setInfoOne(INFO_Z);
              setPlayerOne(ZERG);
              chooseOne(INFO_Z);
            } else {
              setInfoTwo(INFO_Z);
              setPlayerTwo(ZERG);
              chooseTwo(INFO_Z);
            }
          }}
        >
          <Image
            src={zerg}
            className={cn("w-[35vh] h-[55vh]", {
              "border-2 border-white": active === INFO_Z.name,
            })}
            alt="zerg"
          />
          <p className="text-[28px] text-red-700 font-extrabold">Zerg</p>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setActive(INFO_P.name);
            if (currentPlayer === "playerOne") {
              setInfoOne(INFO_P);
              setPlayerOne(PROTOSS);
              chooseOne(INFO_P);
            } else {
              setInfoTwo(INFO_P);
              setPlayerTwo(PROTOSS);
              chooseTwo(INFO_P);
            }
          }}
        >
          <Image
            src={protoss}
            className={cn("w-[35vh] h-[55vh]", {
              "border-2 border-white": active === INFO_P.name,
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
