import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import zerg from "/images/races/zerg.png";
import terran from "/images/races/terran.png";
import protoss from "/images/races/protoss.png";

interface Props {
  className?: string;
}

export const Races: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("flex items-center justify-around mx-20 mb-8", className)}
    >
      <div className="cursor-pointer">
        <Image src={terran} width={220} alt="terran" />
        <p className="text-[28px] text-blue-700  font-extrabold">Terran</p>
      </div>
      <div className="cursor-pointer">
        <Image src={zerg} width={220} alt="zerg" />
        <p className="text-[28px] text-red-700 font-extrabold">Zerg</p>
      </div>
      <div className="cursor-pointer">
        <Image src={protoss} width={220} alt="protoss" />
        <p className="text-[28px] text-yellow-700  font-extrabold">Protoss</p>
      </div>
    </div>
  );
};
