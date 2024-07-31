"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { unitType } from "@/store/game";

import { Container, Unit } from ".";

interface Props {
  fighter: unitType;
  className?: string;
}

export const Fighter: React.FC<Props> = ({ fighter, className }) => {
  const { name, image, health, mana, attack, price } = fighter;
  return (
    <Container className={cn("flex items-center justify-center", className)}>
      {name && (
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
