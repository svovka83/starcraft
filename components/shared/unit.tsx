import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: number;
  name: string;
  health: number;
  mana: number;
  attack: number;
  price: number;
  className?: string;
}

export const Unit: React.FC<Props> = ({
  id,
  name,
  health,
  mana,
  attack,
  className,
}) => {
  return (
    <div className={cn("w-[60px] mx-6 my-2 cursor-pointer", className)}>
      <h2 className="text-fuchsia-400 text-sm text-center">{name}</h2>
      <div className="h-1 bg-green-700"></div>
      <img className="w-[60px] h-[60px]" src={`/img/units/${id}.png`} />
      <div className="flex text-center text-sm text-white font-bold">
        <span className="w-[20px] bg-blue-500">{mana}</span>
        <span className="w-[20px] bg-green-600">{health}</span>
        <span className="w-[20px] bg-red-500">{attack}</span>
      </div>
    </div>
  );
};
