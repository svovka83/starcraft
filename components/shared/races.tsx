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
    <div className={cn("flex items-center justify-around mx-20 mb-8", className)}>
      <div>
        <h1>Terran</h1>
        <Image src={terran} width={220} alt="terran" />
      </div>
      <div>
        <h1>Zerg</h1>
        <Image src={zerg} width={220} alt="zerg" />
      </div>
      <div>
        <h1>Protoss</h1>
        <Image src={protoss} width={220} alt="protoss" />
      </div>
    </div>
  );
};
