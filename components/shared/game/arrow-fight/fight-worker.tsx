import React from "react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";
import { Button } from "../../../ui";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export const FightWorker = () => {
  const fight = useGameStore((state) => state.fightWorker);
  const turn = useGameStore((state) => state.turn);
  const manaUnitOne = useGameStore((state) => state.one.fighterDown.mana);
  const manaUnitTwo = useGameStore((state) => state.two.fighterDown.mana);
  const healthOne = useGameStore((state) => state.one.fighterDown.health);
  const healthTwo = useGameStore((state) => state.two.fighterDown.health);
  const workersOne = useGameStore((state) => state.one.worker.length);
  const workersTwo = useGameStore((state) => state.two.worker.length);
  const manaOne = useGameStore((state) => state.one.mana);
  const manaTwo = useGameStore((state) => state.two.mana);

  return (
    <div
      className={cn(
        "fixed top-[73vh] group",
        turn ? "right-[52%]" : "left-[52%]",
        (healthOne &&
          !healthTwo &&
          turn &&
          workersTwo !== 0 &&
          manaOne >= manaUnitOne) ||
          (!healthOne &&
            healthTwo &&
            !turn &&
            workersOne !== 0 &&
            manaTwo >= manaUnitTwo)
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
