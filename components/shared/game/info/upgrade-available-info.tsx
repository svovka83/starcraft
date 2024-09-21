import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  mana: number;
  currentMana: number;
  minerals: number;
  text: string;
  className?: string;
}

export const UpgradeAvailableInfo: React.FC<Props> = ({
  mana,
  currentMana,
  minerals,
  text,
  className,
}) => {
  return (
    <span className={cn(className)}>
      {((mana === 3 && currentMana === 3 && minerals >= 15) ||
        (mana === 4 && currentMana === 4 && minerals >= 20) ||
        (mana === 5 && currentMana === 5 && minerals >= 25)) && (
        <span
          className={
            "z-30 rounded-sm border text-white bg-green-900 px-3 py-1 text-sm shadow-md pointer-events-none"
          }
        >
          {text}
        </span>
      )}
    </span>
  );
};
