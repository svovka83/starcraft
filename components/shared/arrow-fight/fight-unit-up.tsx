import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui";
import { useGameStore } from "@/store/game";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export const FightUnitUp = () => {
  const fight = useGameStore((state) => state.fightUnitUp);
  const turn = useGameStore((state) => state.turn);
  const healthOne = useGameStore((state) => state.one.fighterUp.health);
  const healthTwo = useGameStore((state) => state.two.fighterUp.health);
  const manaUnitOne = useGameStore((state) => state.one.fighterUp.mana);
  const manaUnitTwo = useGameStore((state) => state.two.fighterUp.mana);
  const manaOne = useGameStore((state) => state.one.mana);
  const manaTwo = useGameStore((state) => state.two.mana);

  return (
    <div
      className={cn(
        "fixed top-[31vh] group",
        turn ? "right-[52%]" : "left-[52%]",
        healthOne > 0 &&
          healthTwo > 0 &&
          manaTwo >= manaUnitTwo &&
          manaOne >= manaUnitOne
          ? "visible"
          : "invisible"
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
          className="fixed top-[20vh] left-[50%] translate-x-10 opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      ) : (
        <ArrowBigLeftDash
          size={70}
          className="fixed top-[20vh] right-[50%] -translate-x-10 opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      )}
    </div>
  );
};
