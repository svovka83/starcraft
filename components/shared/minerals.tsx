"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { unitType } from "@/store/game";

import { Container, Unit } from ".";

import { useGameStore } from "@/store/game";
import { Button } from "../ui";

interface Props {
  worker: unitType[];
  mine: number;
  className?: string;
}

export const Minerals: React.FC<Props> = ({ worker, mine, className }) => {
  const addMinerals = useGameStore((state) => state.addMinerals);

  return (
    <Container className={cn("flex flex-col", className)}>
      <div className="flex justify-around">
        {worker.map((worker) => (
          <Unit
            key={worker.id}
            name={worker.name}
            image={worker.image}
            health={worker.health}
            mana={worker.mana}
            attack={worker.attack}
            price={worker.price}
          />
        ))}
      </div>
      <div className="flex justify-center px-4 pt-4">
        <Button
          variant="outline"
          size="lg"
          className="text-[24px] font-bold"
          onClick={addMinerals}
        >
          {mine}
        </Button>
      </div>
    </Container>
  );
};
