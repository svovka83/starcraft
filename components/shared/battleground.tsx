"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { unitType, useGameStore } from "@/store/game";

import { Container, Unit } from ".";

interface Props {
  battlegroundUnits: unitType[];
  className?: string;
}

export const Battleground: React.FC<Props> = ({battlegroundUnits, className }) => {
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
