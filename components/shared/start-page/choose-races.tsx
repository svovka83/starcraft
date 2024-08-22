"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui";
import zerg from "/images/races/zerg.png";
import terran from "/images/races/terran.png";
import protoss from "/images/races/protoss.png";
import { useGameStore } from "@/store/game";
import { ZERG, INFO_Z } from "@/constants/zerg";
import { TERRAN, INFO_T } from "@/constants/terran";
import { PROTOSS, INFO_P } from "@/constants/protoss";

export const ChooseRaces: React.FC = () => {
  const [active, setActive] = React.useState<string>("");
  const [currentPlayer, setCurrentPlayer] = React.useState(
    "playerOne" || "playerTwo"
  );
  const [infoOne, infoTwo, chooseOne, chooseTwo] = useGameStore((state) => [
    state.one.info,
    state.two.info,
    state.chooseOne,
    state.chooseTwo,
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
              chooseOne(TERRAN, INFO_T);
            } else {
              chooseTwo(TERRAN, INFO_T);
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
              chooseOne(ZERG, INFO_Z);
            } else {
              chooseTwo(ZERG, INFO_Z);
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
              chooseOne(PROTOSS, INFO_P);
            } else {
              chooseTwo(PROTOSS, INFO_P);
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

      <Link
        href="/game"
        className={cn("text-[24px]", {
          "pointer-events-none": infoOne.name && infoTwo.name ? false : true,
        })}
      >
        <Button
          size="lg"
          disabled={infoOne.name && infoTwo.name ? false : true}
        >
          Start
        </Button>
      </Link>
    </div>
  );
};
