import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  image: string;
  mana: number;
  health: number;
  attack: number;
  price: number;
  revers?: boolean;
}

export const UnitCart: React.FC<Props> = ({
  name,
  image,
  mana,
  health,
  attack,
  price,
  revers,
}) => {
  return (
    <div className="w-[210px] h-[320px] text-[18px] font-medium bg-violet-200 mt-12 rounded-md shadow-lg shadow-violet-200">
      <h3 className="text-2xl text-fuchsia-500 py-1">{name}</h3>
      <img
        src={image}
        alt="unit"
        className={cn("w-[170px] h-[170px] bg-white mx-auto mb-6 rounded-md", {
          "scale-x-[-1]": revers,
        })}
      />
      <div className="flex justify-around">
        <span className="text-green-700">health: {health}</span>
        <span className="text-blue-700">mana: {mana}</span>
      </div>
      <div className="flex justify-around">
        <span className="text-red-500">attack: {attack}</span>
        <span className="text-violet-700">price: {price}</span>
      </div>
    </div>
  );
};
