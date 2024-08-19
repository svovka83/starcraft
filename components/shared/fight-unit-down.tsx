import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { useGameStore } from "@/store/game";
import { ArrowBigRightDash } from "lucide-react";

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
        className="text-slate-100 text-[20px] font-bold"
      >
        Fight
      </Button>
      <ArrowBigRightDash
        size={70}
        className="absolute top-1/2 translate-x-[4vh] opacity-0 invisible translate-y-[6vh] text-red-500 font-bold transition-all group-hover:translate-x-[36vh] group-hover:opacity-100 group-hover:visible duration-1000"
      />
    </div>
  );
};
