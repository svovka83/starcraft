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
        "fixed top-[25vh] group",
        turn ? "right-[52%]" : "left-[52%]",
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
          className="absolute left-0 translate-x-[45vh] -translate-y-[20vh] opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      ) : (
        <ArrowBigLeftDash
          size={70}
          className="absolute right-0 -translate-x-[45vh] -translate-y-[20vh] opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      )}
    </div>
  );
};
