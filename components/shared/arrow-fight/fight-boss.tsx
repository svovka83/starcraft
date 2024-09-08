import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui";
import { useGameStore } from "@/store/game";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export const FightBoss = () => {
  const [disabledFight, setDisabledFight] = React.useState(false);

  const fight = useGameStore((state) => state.fightBoss);
  const turn = useGameStore((state) => state.turn);
  const healthFighterOne = useGameStore((state) => state.one.fighterUp.health);
  const healthFighterTwo = useGameStore((state) => state.two.fighterUp.health);
  const manaFighterOne = useGameStore((state) => state.one.fighterUp.mana);
  const manaFighterTwo = useGameStore((state) => state.two.fighterUp.mana);
  const manaOne = useGameStore((state) => state.one.mana);
  const manaTwo = useGameStore((state) => state.two.mana);

  const attackBoss = () => {
    setDisabledFight(true);
    fight();
    setTimeout(() => {
      setDisabledFight(false);
    }, 3000);
  };

  return (
    <div
      className={cn(
        "fixed top-[25vh] group",
        turn ? "right-[52%]" : "left-[52%]",
        (healthFighterOne &&
          !healthFighterTwo &&
          manaOne >= manaFighterOne &&
          turn) ||
          (!healthFighterOne &&
            healthFighterTwo &&
            manaTwo >= manaFighterTwo &&
            !turn)
          ? "visible"
          : "invisible"
      )}
    >
      <Button
        variant="destructive"
        size="sm"
        onClick={attackBoss}
        className={cn("text-slate-100 text-[20px] font-bold", {
          invisible: disabledFight,
        })}
      >
        attack
      </Button>
      {turn ? (
        <ArrowBigRightDash // need make refactoring !!!
          size={70}
          className="fixed top-[10vh] left-[50%] translate-x-48 opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      ) : (
        <ArrowBigLeftDash
          size={70}
          className="fixed top-[10vh] right-[50%] -translate-x-48 opacity-0 text-red-500 font-bold group-hover:opacity-100 duration-300"
        />
      )}
    </div>
  );
};
