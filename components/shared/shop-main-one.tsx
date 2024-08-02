"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Container, ShopModal } from ".";

import { useGameStore } from "@/store/game";

import Lair from "/images/imgZerg/Lair.webp";
import larva from "/images/imgZerg/larva.webp";

interface Props {
  className?: string;
}

export const ShopMainOne: React.FC<Props> = ({ className }) => {
  const [focus, setFocus] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const playerUnitsOne = useGameStore((state) => state.one.units);
  const addWorker = useGameStore((state) => state.createWorker);
  const bossLife = useGameStore((state) => state.one.boss);

  const showShopUnits = () => {
    setModal(!modal);
  };

  return (
    <Container className={cn("p-1", className)}>
      <div className="flex justify-between">
        <div>
        <Image
            onMouseMove={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            onClick={showShopUnits}
            src={Lair}
            className="h-[24vh] px-2 hover:scale-105 hover:transition hover:duration-300 cursor-pointer"
            alt="larva"
          />
          <div
            className={cn(
              "absolute w-[150px] text-center invisible rounded-2xl bg-red-500 text-white transition-all opacity-0",
              focus && "visible rounded-2xl mt-4 p-4 duration-500 opacity-80"
            )}
          >
            Create Unit
          </div>
        </div>
        <div className="float-right flex flex-col justify-between">
          <span
            className="w-[50px] h-[50px] text-center text-[36px] rounded-[50%] text-white bg-green-800 cursor-pointer"
            title="LIFE"
          >
            {bossLife}
          </span>
          <Image
            onClick={addWorker}
            src={larva}
            alt="larva"
            width={50}
            height={50}
            className="cursor-pointer rounded-[50%] hover:transform hover:scale-110 hover:transition hover:duration-300"
          />
        </div>
      </div>
      {modal && <ShopModal modal={modal} setModal={setModal} playerUnits={playerUnitsOne} />}
    </Container>
  );
};
