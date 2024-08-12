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
  const [modal, setModal] = React.useState(false);
  const [playerUnitsOne, minerals] = useGameStore((state) => [state.one.units, state.one.minerals]);
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
            onClick={showShopUnits}
            src={Lair}
            className="h-[24vh] px-2 cursor-pointer"
            alt="larva"
          />
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
            className="cursor-pointer rounded-[50%] hover:transform hover:scale-110 hover:duration-300"
          />
        </div>
      </div>
      <ShopModal
        modal={modal}
        setModal={setModal}
        minerals={minerals}
        playerUnits={playerUnitsOne}
      />
    </Container>
  );
};
