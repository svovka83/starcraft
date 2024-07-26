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
    <div className={cn("px-4 py-1", className)}>
      <h2 className="text-fuchsia-400 text-sm text-center">{name}</h2>
      <div className="h-1 bg-green-700"></div>
      <img className="w-[60px] h-[60px]" src={`/img/units/${id}.png`} />
      <div className="flex">
        <span className="w-[20px] h-[20px] text-center bg-blue-500">
          {mana}
        </span>
        <span className="w-[20px] h-[20px] text-center bg-green-500">
          {health}
        </span>
        <span className="w-[20px] h-[20px] text-center bg-red-500">
          {attack}
        </span>
      </div>
    </div>
  );
};
