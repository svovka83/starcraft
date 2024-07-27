"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Container, Unit } from ".";

import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const ArmyOne: React.FC<Props> = ({ className }) => {
  const armyUnits = useGameStore((state) => state.one.army);
  const battleUnit = useGameStore((state) => state.addUnitToBattleground);

  return (
    <Container className={cn("flex flex-wrap justify-center", className)}>
      {armyUnits.map(({ id, name, health, mana, attack, price }, index) => (
        <div key={index} onClick={() => battleUnit(id)}>
          <Unit
            id={id}
            name={name}
            health={health}
            mana={mana}
            attack={attack}
            price={price}
          />
        </div>
      ))}
    </Container>
  );
};
