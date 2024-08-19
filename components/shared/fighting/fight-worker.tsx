import React from "react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";
import { Button } from "../../ui";

export const FightWorker = () => {
  const fight = useGameStore((state) => state.fightWorker);
  const turn = useGameStore((state) => state.turn);
  const visibleOne = useGameStore((state) => state.one.fighterDown.health);
  const visibleTwo = useGameStore((state) => state.two.fighterDown.health);
  const workersOne = useGameStore((state) => state.one.worker.length);
  const workersTwo = useGameStore((state) => state.two.worker.length);

  return (
    <div
      className={cn(
        "fixed top-[73vh]",
        turn ? "right-[55%]" : "left-[55%]",
        (visibleOne && !visibleTwo && turn && workersTwo !== 0) ||
          (!visibleOne && visibleTwo && !turn && workersOne !== 0)
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
        kick worker
      </Button>
    </div>
  );
};
