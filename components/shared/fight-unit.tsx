import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { useGameStore } from "@/store/game";

export const FightUnit = () => {
  const fight = useGameStore((state) => state.fightUnit);
  const turn = useGameStore((state) => state.turn);
  const visibleOne = useGameStore((state) => state.one.fighter.health);
  const visibleTwo = useGameStore((state) => state.two.fighter.health);

  return (
    <div
      className={cn(
        "fixed top-[10vh]",
        turn ? "right-[50%]" : "left-[50%]",
        visibleOne > 0 && visibleTwo > 0 ? "visible" : "invisible"
      )}
    >
      <Button
        variant="destructive"
        size="lg"
        onClick={fight}
        className="text-slate-100 text-[20px] font-bold"
      >
        Fight
      </Button>
    </div>
  );
};
