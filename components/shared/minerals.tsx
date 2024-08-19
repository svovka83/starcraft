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
    <Container className={cn("flex flex-col justify-around")}>
      <div className={cn("flex flex-row-4 gap-2", className)}>
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
          />
        ))}
      </div>
      <div className={cn("flex items-center justify-around")}>
        <Button
          variant="secondary"
          size="sm"
          className="text-[20px] font-bold my-2"
        >
          <span>
            Left <b>{mine}</b> minerals:
          </span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-[20px] font-bold my-2"
          onClick={addMinerals}
        >
          <span className="text-">
            Add <b>{worker.length}</b>
          </span>
        </Button>
      </div>
    </Container>
  );
};
