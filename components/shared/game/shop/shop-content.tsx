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
    <span
      className={cn(
        "relative flex flex-row items-end gap-2 p-2 text-[18px] font-medium rounded-md border-2 border-black bg-neutral-900 hover:-translate-y-1 duration-200 cursor-pointer",
        {
          "border-2 border-white": active,
          "opacity-50 pointer-events-none": disabled,
        }
      )}
      onMouseEnter={() => unit_hover.play()}
      onClick={activated}
    >
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt="unit"
          className={cn("w-[100px] h-[100px] bg-white mx-auto rounded-md")}
        />
        <h3 className="text-xl text-fuchsia-500">{name}</h3>
      </div>
      <div className="flex flex-col">
        <span className="text-blue-700">mana: {mana}</span>
        <span className="text-green-700">health: {health}</span>
        <span className="text-red-600">attack: {attack}</span>
        <span className="text-white">price: {price}</span>
      </div>
      {active && <CircleCheck className="absolute top-1.5 right-2" />}
    </span>
  );
};
