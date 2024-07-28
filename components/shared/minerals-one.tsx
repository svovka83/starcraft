"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Container, Unit } from ".";

import { useGameStore } from "@/store/game";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const MineralsOne: React.FC<Props> = ({ className }) => {
  const worker = useGameStore((state) => state.one.worker);

  return (
    <Container className={cn("flex flex-col w-[40%]", className)}>
      <div className="flex justify-around">
        {worker.map((worker) => (
          <Unit
            key={worker.id}
            name={worker.name}
            health={worker.health}
            mana={worker.mana}
            attack={worker.attack}
            price={worker.price}
          />
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <Button variant="outline" size="sm">
          AddMinerals
        </Button>
      </div>
    </Container>
  );
};
