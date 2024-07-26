import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Races: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-around", className)}>
      <div>
        <h1>Zerg</h1>
        <img className="w-[100px] h-[100px]" src="/img/races/zerg.png" alt="terran" />
      </div>
      <div>
        <h1>Terran</h1>
        <img className="w-[100px] h-[100px]" src="/img/races/terran.png" alt="terran" />
      </div>
      <div>
        <h1>Protoss</h1>
        <img className="w-[100px] h-[100px]" src="/img/races/protoss.png" alt="terran" />
      </div>
    </div>
  );
};
