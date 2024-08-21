import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { CircleCheck } from "lucide-react";

interface Props {
  id: number;
  name: string;
  image: StaticImageData;
  health: number;
  mana: number;
  attack: number;
  price: number;
  active?: boolean;
  setActiveUnit?: VoidFunction;
  reverse: boolean;
}

export const Unit: React.FC<Props> = ({
  id,
  name,
  image,
  health,
  mana,
  attack,
  active,
  setActiveUnit,
  reverse,
}) => {
  return (
    <div
      className={cn("relative w-[60px] cursor-pointer", {
        "bg-gray-200": active,
      })}
      onClick={setActiveUnit}
    >
      <div className="flex justify-between text-center text-[12px] text-white font-bold">
        <span className="w-[18px] h-[18px] text-center text-white font-bold bg-blue-500">
          {mana}
        </span>
        <span className="text-fuchsia-400">{name}</span>
      </div>
      <Image
        src={image}
        className={cn("w-[60px] h-[60px]", { "scale-x-[-1]": reverse })}
        alt="unit"
      />
      <div className="flex text-center text-[12px] text-white font-bold">
        <span className="w-[30px] h-[18px] bg-green-600">{health}</span>
        <span className="w-[30px] h-[18px] bg-red-500">{attack}</span>
      </div>

      {active && (
        <CircleCheck
          size={18}
          className="absolute text-blue-700 top-4 right-[2px]"
        />
      )}
    </div>
  );
};
