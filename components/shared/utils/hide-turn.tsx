import React from "react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";

export const HideTurn: React.FC = () => {
  const { turn } = useGameStore();
  const { gameMode } = useGameStore();

  return (
    <div
      className={cn(
        turn
          ? "w-[590px] left-[50%]"
          : gameMode === "COMPUTER"
          ? "w-[1180px]"
          : "w-[590px] right-[50%]",
        "fixed top-[10vh] bg-black/0 bottom-0 z-30"
      )}
    ></div>
  );
};
