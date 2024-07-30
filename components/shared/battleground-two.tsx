"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Container, Unit } from ".";

import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const BattlegroundTwo: React.FC<Props> = ({ className }) => {
  const battlegroundUnits = useGameStore((state) => state.one.battleground);
  const addUnit = useGameStore((state) => state.addUnitToFighter);

  return (
    <Container className={cn("flex flex-wrap justify-center", className)}>
      {battlegroundUnits.map(
        ({ id, name, image, health, mana, attack, price }, index) => (
          <div key={index} onClick={() => addUnit(id)}>
            <Unit
              name={name}
              image={image}
              health={health}
              mana={mana}
              attack={attack}
              price={price}
            />
          </div>
        )
      )}
    </Container>
  );
};
