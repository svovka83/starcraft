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
    <Container className="flex flex-col">
      <div className={cn("flex flex-row-3", className)}>
        {worker.map((worker) => (
          <Unit
            id={worker.id}
            key={worker.id}
            name={worker.name}
            image={worker.image}
            health={worker.health}
            mana={worker.mana}
            attack={worker.attack}
            price={worker.price}
            className="mx-4"
          />
        ))}
      </div>
      <div className={cn("flex", className)}>
        <Button
          variant="outline"
          size="lg"
          className="text-[24px] font-bold my-2 mx-4"
          onClick={addMinerals}
        >
          {mine}
        </Button>
      </div>
    </Container>
  );
};
