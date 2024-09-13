import React from "react";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { unit_hover } from "@/constants";

interface Props {
  name: string;
  image: string;
  health: number;
  mana: number;
  attack: number;
  price: number;
  activated: VoidFunction;
  active?: boolean;
  disabled?: boolean;
}

export const ShopContent: React.FC<Props> = ({
  name,
  image,
  health,
  mana,
  attack,
  price,
  activated,
  active,
  disabled,
}) => {
  return (
    <div
      className={cn(
        "relative grid grid-cols-6 gap-10 pl-6 border-2 border-black items-center cursor-pointer bg-black rounded-2xl hover:translate-x-2 duration-200",
        {
          "border-2 border-white": active,
          "opacity-50 pointer-events-none": disabled,
        }
      )}
      onMouseEnter={() => unit_hover.play()}
      onClick={activated}
    >
      <p className="text-2xl ml-3">{name}</p>
      <img src={image} className="w-[80px] h-[80px]" alt="unit" />
      <p>mana: {mana}</p>
      <p>health: {health}</p>
      <p>attack: {attack}</p>
      <b>price: {price}</b>
      {active && <CircleCheck className="absolute top-2 left-2" />}
    </div>
  );
};
