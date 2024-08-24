import React from "react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";
import { Button } from "../../ui";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

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
        "fixed top-[73vh] group",
        turn ? "right-[52%]" : "left-[52%]",
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
        attack
      </Button>
      {turn ? (
        <ArrowBigRightDash // need make refactoring !!!
          size={70}
          className="fixed bottom-[15vh] left-[50%] translate-x-48 opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      ) : (
        <ArrowBigLeftDash
          size={70}
          className="fixed bottom-[15vh] right-[50%] -translate-x-48 opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      )}
    </div>
  );
};
