import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui";
import { useGameStore } from "@/store/game";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export const FightBoss = () => {
  const fight = useGameStore((state) => state.fightBoss);
  const turn = useGameStore((state) => state.turn);
  const visibleOne = useGameStore((state) => state.one.fighterUp.health);
  const visibleTwo = useGameStore((state) => state.two.fighterUp.health);

  return (
    <div
      className={cn(
        "fixed top-[10vh] group",
        turn ? "right-[57%]" : "left-[57%]",
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
        attack
      </Button>
      {turn ? (
        <ArrowBigRightDash // need make refactoring !!!
          size={70}
          className="absolute translate-x-[60vh] -translate-y-[3vh] opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      ) : (
        <ArrowBigLeftDash
          size={70}
          className="absolute -translate-x-[58vh] -translate-y-[3vh] opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      )}
    </div>
  );
};
