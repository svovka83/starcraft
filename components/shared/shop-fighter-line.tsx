import React from "react";
import { cn } from "@/lib/utils";

import { ShopMainOne, Fighter, ShopMainTwo } from "@/components/shared";
import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const ShopFighterLine: React.FC<Props> = ({ className }) => {
  const fighterOne = useGameStore((state) => state.one.fighter);
  const fighterTwo = useGameStore((state) => state.two.fighter);

  return (
    <div className={cn("flex h-[26vh] border", className)}>
      <ShopMainOne />
      <Fighter fighter={fighterOne} />
      <Fighter fighter={fighterTwo} />
      <ShopMainTwo />
    </div>
  );
};
