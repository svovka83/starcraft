"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Container, Unit } from ".";

import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const FighterTwo: React.FC<Props> = ({ className }) => {
  const fighter = useGameStore((state) => state.one.fighter);
  const { name, image, health, mana, attack, price } = fighter;

  return (
    <Container className={cn("flex items-center justify-center", className)}>
      {fighter.name && (
        <Unit
          name={name}
          image={image}
          health={health}
          mana={mana}
          attack={attack}
          price={price}
        />
      )}
    </Container>
  );
};
