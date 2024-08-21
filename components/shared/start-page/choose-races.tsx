"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../../ui";
import Image from "next/image";
import zerg from "/images/races/zerg.png";
import terran from "/images/races/terran.png";
import protoss from "/images/races/protoss.png";
import { useGameStore } from "@/store/game";
import { unitType } from "@/store/game";
import { ZERG, INFO_Z } from "@/constants/zerg";
import { TERRAN, INFO_T } from "@/constants/terran";
import { PROTOSS, INFO_P } from "@/constants/protoss";

export const ChooseRaces: React.FC = () => {
  const [active, setActive] = React.useState<unitType[]>([]);
  const [currentPlayer, setCurrentPlayer] = React.useState(
    "playerOne" || "playerTwo"
  );
  const [chooseOne, chooseTwo] = useGameStore((state) => [
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
            setActive(TERRAN);
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
              "border-2 border-white": active === TERRAN,
            })}
            alt="terran"
          />
          <p className="text-[28px] text-blue-700  font-extrabold">Terran</p>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setActive(ZERG);
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
              "border-2 border-white": active === ZERG,
            })}
            alt="zerg"
          />
          <p className="text-[28px] text-red-700 font-extrabold">Zerg</p>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setActive(PROTOSS);
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
              "border-2 border-white": active === PROTOSS,
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

      <Link href="/game" className="text-[24px]">
        <Button
          disabled={!chooseOne && !chooseTwo}
          variant="default"
          size="lg"
          className="text-[24px]"
        >
          Start
        </Button>
      </Link>
    </div>
  );
};
