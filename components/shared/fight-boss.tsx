import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { useGameStore } from "@/store/game";

export const FightBoss = () => {
  const fight = useGameStore((state) => state.fightBoss);
  const turn = useGameStore((state) => state.turn);
  const visibleOne = useGameStore((state) => state.one.fighterUp.health);
  const visibleTwo = useGameStore((state) => state.two.fighterUp.health);

  return (
    <div
      className={cn(
        "fixed top-[10vh]",
        turn ? "right-[55%]" : "left-[55%]",
        (visibleOne && !visibleTwo && turn) ||
          (!visibleOne && visibleTwo && !turn)
          ? "visible"
          : "invisible"
      )}
    >
      <Button
        variant="destructive"
        size="sm"
        onClick={fight}
        className="text-slate-100 text-[20px] font-bold"
      >
        kick boss
      </Button>
    </div>
  );
};
