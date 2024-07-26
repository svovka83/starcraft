"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Container } from ".";
import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const ArmyOne: React.FC<Props> = ({ className }) => {
  const armyUnits = useGameStore((state) => state.player.army);

  return (
    <Container className={cn("flex items-center justify-center", className)}>
      <div className="bg-blue-700 text-white px-5">
        {armyUnits.map((unit) => (
          <div key={unit.id} className="grid grid-cols-4 gap-10 py-2">
            <h1>{unit.name}</h1>
            <p>health: {unit.health}</p>
            <p>attack: {unit.attack}</p>
            <b>price: {unit.price}</b>
          </div>
        ))}
      </div>
    </Container>
  );
};
