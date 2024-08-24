import React from "react";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import toast from "react-hot-toast";

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
  disabled?: boolean;
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
  disabled,
}) => {
  const activated = () => {
    setActiveUnit(id);
    toast.success(`Unit ${name} selected`);
  };

  return (
    <div
      key={id}
      className={cn(
        "relative grid grid-cols-6 gap-10 pl-6 border-2 border-black items-center cursor-pointer bg-black rounded-2xl hover:translate-x-2 duration-200",
        {
          "border-2 border-white": active,
          "opacity-50 pointer-events-none": disabled,
        }
      )}
      onClick={activated}
    >
      <p className="text-2xl ml-3">{name}</p>
      <Image src={image} className="w-[80px] h-[80px]" alt="unit" />
      <p>mana: {mana}</p>
      <p>health: {health}</p>
      <p>attack: {attack}</p>
      <b>price: {price}</b>
      {active && <CircleCheck className="absolute top-2 left-2" />}
    </div>
  );
};
