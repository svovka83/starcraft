import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui";
import { useGameStore } from "@/store/game";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export const FightUnitDown = () => {
  const fight = useGameStore((state) => state.fightUnitDown);
  const turn = useGameStore((state) => state.turn);
  const visibleOne = useGameStore((state) => state.one.fighterDown.health);
  const visibleTwo = useGameStore((state) => state.two.fighterDown.health);

  return (
    <div
      className={cn(
        "fixed top-[73vh] group",
        turn ? "right-[57%]" : "left-[57%]",
        visibleOne > 0 && visibleTwo > 0 ? "visible" : "invisible"
      )}
    >
      <Button
        variant="destructive"
        size="default"
        onClick={fight}
        className="text-slate-100 text-[18px] font-bold"
      >
        attack
      </Button>
      {turn ? (
        <ArrowBigRightDash // need make refactoring !!!
          size={70}
          className="absolute translate-x-[34vh] translate-y-[3vh] opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      ) : (
        <ArrowBigLeftDash
          size={70}
          className="absolute -translate-x-[33vh] translate-y-[3vh] opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      )}
    </div>
  );
};
