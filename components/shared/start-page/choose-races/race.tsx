import React from "react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { infoType, unitType } from "@/store/game";
import { button_click_1 } from "@/constants";

interface Props {
  nameRace: string;
  chooseOne: (nameRace: string) => void;
  chooseTwo: (nameRace: string) => void;
  active: string;
  setActive: (nameRace: string) => void;
  infoRace: infoType;
  setInfoOne: (infoRace: infoType) => void;
  setInfoTwo: (infoRace: infoType) => void;
  race: Array<unitType>;
  setPlayerOne: (race: Array<unitType>) => void;
  setPlayerTwo: (race: Array<unitType>) => void;
  currentPlayer: string;
  src: StaticImageData;
}

export const Race: React.FC<Props> = ({
  nameRace,
  chooseOne,
  chooseTwo,
  active,
  setActive,
  infoRace,
  setInfoOne,
  setInfoTwo,
  race,
  setPlayerOne,
  setPlayerTwo,
  currentPlayer,
  src,
}) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setActive(nameRace);
        button_click_1.play();
        if (currentPlayer === "playerOne") {
          setInfoOne(infoRace);
          setPlayerOne(race);
          chooseOne(nameRace);
        } else {
          setInfoTwo(infoRace);
          setPlayerTwo(race);
          chooseTwo(nameRace);
        }
      }}
    >
      <Image
        src={src}
        className={cn("w-[35vh] h-[55vh]", {
          "border-2 border-white": active === nameRace,
        })}
        alt={nameRace}
      />
      <p
        className={cn("text-[28px] font-extrabold mt-2", {
          "text-blue-700": nameRace === "Terran",
          "text-red-700": nameRace === "Zerg",
          "text-orange-600": nameRace === "Protoss",
        })}
      >
        {nameRace}
      </p>
    </div>
  );
};
