import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { useGameStore } from "@/store/game";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export const FightUnitUp = () => {
  const fight = useGameStore((state) => state.fightUnitUp);
  const turn = useGameStore((state) => state.turn);
  const visibleOne = useGameStore((state) => state.one.fighterUp.health);
  const visibleTwo = useGameStore((state) => state.two.fighterUp.health);

  return (
    <div
      className={cn(
        "fixed top-[10vh] group",
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
        Fight
      </Button>
      {turn ? (
        <ArrowBigRightDash
          size={70}
          className="absolute top-1/2 translate-x-[4vh] translate-y-[6vh] opacity-0 invisible text-red-500 font-bold transition-all group-hover:translate-x-[36vh] group-hover:opacity-100 group-hover:visible duration-1000"
        />
      ) : (
        <ArrowBigLeftDash
          size={70}
          className="absolute top-1/2 -translate-x-[2vh] translate-y-[6vh] opacity-100 text-red-500 font-bold transition-all -group-hover:translate-x-[72vh] group-hover:opacity-100 group-hover:visible duration-1000"
        />
      )}
    </div>
  );
};
