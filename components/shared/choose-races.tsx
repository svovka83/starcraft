"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import zerg from "/images/races/zerg.png";
import terran from "/images/races/terran.png";
import protoss from "/images/races/protoss.png";
import { useGameStore } from "@/store/game";
import { unitType } from "@/store/game";
import { ZERG } from "@/constants/zerg";
import { TERRAN } from "@/constants/terran";
import { PROTOSS } from "@/constants/protoss";
import { Button } from "../ui";

export const ChooseRaces: React.FC = () => {
  const [active, setActive] = React.useState<unitType[]>([] ||
    ZERG || TERRAN || PROTOSS
  );

  const [currentChoose, setCurrentChoose] = React.useState<unitType[]>([]);
  const [chooseOne, setChooseOne] = React.useState<unitType[]>([]);
  const [chooseTwo, setChooseTwo] = React.useState<unitType[]>([]);

  const confirm = useGameStore((state) => state.chooseRace);

  const confirmRace = (one: unitType[], two: unitType[]) => {
    confirm(one, two);
  };

  console.log(currentChoose, chooseOne, chooseTwo);

  return (
    <div>
      <div className="flex justify-between mb-8">
        <Button onClick={() => setChooseOne(currentChoose)}>Confirm 1</Button>

        <div
          className="cursor-pointer"
          onClick={() => {
            setCurrentChoose(TERRAN);
            setActive(TERRAN);
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
            setCurrentChoose(ZERG);
            setActive(ZERG);
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
            setCurrentChoose(PROTOSS);
            setActive(PROTOSS);
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

        <Button onClick={() => setChooseTwo(currentChoose)}>Confirm 2</Button>
      </div>

      <Link href="/game" className="text-[24px]">
        <Button
          variant="default"
          size="lg"
          className="text-[24px]"
          onClick={() => confirmRace(chooseOne, chooseTwo)}
        >
          Start
        </Button>
      </Link>
    </div>
  );
};
