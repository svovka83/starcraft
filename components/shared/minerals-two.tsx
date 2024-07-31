"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Container, Unit } from ".";

import { useGameStore } from "@/store/game";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const MineralsTwo: React.FC<Props> = ({ className }) => {
  const worker = useGameStore((state) => state.two.worker);
  const mine = useGameStore((state) => state.two.mine);
  const addMinerals = useGameStore((state) => state.addMinerals);

  return (
    <Container className={cn("flex flex-col w-[40%]", className)}>
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
      <div className="flex justify-start px-4 pt-2">
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
