import React from "react";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

interface Props {
  name: string;
  image: string;
  health: number;
  mana: number;
  attack: number;
  price: number;
  active?: boolean;
  setActiveUnit?: VoidFunction;
  reverse: boolean;
}

export const Unit: React.FC<Props> = ({
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
        "bg-gray-100/10": active,
      })}
      onClick={setActiveUnit}
    >
      <div className="flex justify-between text-center text-[12px] text-white font-bold">
        <span className="w-[18px] h-[18px] text-center text-white font-bold bg-blue-500">
          {mana}
        </span>
        <span className="text-fuchsia-400">{name}</span>
      </div>
      <img
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
          className="absolute text-white top-4 right-[2px]"
        />
      )}
    </div>
  );
};
