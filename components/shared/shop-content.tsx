import React from "react";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Props {
  id: number;
  name: string;
  image: StaticImageData;
  health: number;
  mana: number;
  attack: number;
  price: number;
  setActiveUnit: (id: number) => void;
  active?: boolean;
  className?: string;
}

export const ShopContent: React.FC<Props> = ({
  id,
  name,
  image,
  health,
  mana,
  attack,
  price,
  setActiveUnit,
  active,
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <div
        key={id}
        className={cn(
          "relative grid grid-cols-6 gap-10 pl-6 border-2 border-black items-center cursor-pointer bg-black rounded-2xl hover:translate-x-2 duration-200",
          active && "border-2 border-white"
        )}
        onClick={() => setActiveUnit(id)}
      >
        <p className="text-2xl ml-3">{name}</p>
        <Image src={image} alt="unit" width={80} height={80} />
        <p>health: {health}</p>
        <p>mana: {mana}</p>
        <p>attack: {attack}</p>
        <b>price: {price}</b>
        {active && <CircleCheck className="absolute top-2 left-2" />}
      </div>
    </div>
  );
};
