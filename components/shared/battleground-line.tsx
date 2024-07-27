import React from "react";
import { cn } from "@/lib/utils";

import { ArmyOne, ArmyTwo, BattlegroundOne, BattlegroundTwo } from ".";

interface Props {
  className?: string;
}

export const BattlegroundLine: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex h-[36vh] border", className)}>
      <ArmyOne />
      <BattlegroundOne />
      <BattlegroundTwo />
      <ArmyTwo />
    </div>
  );
};
