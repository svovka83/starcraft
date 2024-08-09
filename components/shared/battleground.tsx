"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { unitType, useGameStore } from "@/store/game";

import { Container, Unit } from ".";
import { Button } from "../ui";
import { MoveDown, MoveUp } from "lucide-react";

interface Props {
  battlegroundUnits: unitType[];
  className?: string;
}

export const Battleground: React.FC<Props> = ({
  battlegroundUnits,
  className,
}) => {
  const [activeUnit, setActiveUnit] = React.useState(0);
  const moveUnitToFight = useGameStore((state) => state.moveUnitToFighter);

  return (
    <Container className={cn("w-[40%] flex", className)}>
      <div className="flex flex-wrap justify-around w-[85%]">
        {battlegroundUnits.map(
          ({ id, name, image, health, mana, attack, price }, index) => (
            <div key={index}>
              <Unit
                id={id}
                name={name}
                image={image}
                health={health}
                mana={mana}
                attack={attack}
                price={price}
                setActiveUnit={setActiveUnit}
                active={activeUnit === id}
              />
            </div>
          )
        )}
      </div>
      <div className="flex flex-1 flex-col justify-around">
        <Button disabled={!activeUnit} onClick={() => moveUnitToFight(activeUnit)}><MoveUp /></Button>
        <Button disabled={!activeUnit} ><MoveDown /></Button>
      </div>
    </Container>
  );
};
