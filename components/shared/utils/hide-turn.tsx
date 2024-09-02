import React from "react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";

export const HideTurn: React.FC = () => {
  const turn = useGameStore((state) => state.turn);

  return (
    <div
      className={cn(
        turn
          ? "w-[590px] left-[50%] text-red-500"
          : "w-[590px] right-[50%] text-blue-500",
        "fixed top-[10vh] bg-black/0 bottom-0 z-30"
      )}
    ></div>
  );
};
