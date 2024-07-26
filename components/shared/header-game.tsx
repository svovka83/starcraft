import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const HeaderGame: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        "border h-[10vh] flex items-center justify-between text-[24px] font-extrabold px-2  shadow-lg shadow-black/10",
        className
      )}
    >
      <span>MineralsOne: 10</span>
      <span className="uppercase">turn</span>
      <span>MineralsTwo: 10</span>
    </header>
  );
};
