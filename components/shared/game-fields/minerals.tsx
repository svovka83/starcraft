import React from "react";
import { cn } from "@/lib/utils";
import { unitType } from "@/store/game";
import { Container, Unit } from "..";
import { useGameStore } from "@/store/game";
import { Button } from "../../ui";

interface Props {
  worker: unitType[];
  mine: number;
  reverse: boolean;
}

export const Minerals: React.FC<Props> = ({ worker, mine, reverse }) => {
  const addMinerals = useGameStore((state) => state.addMinerals);

  return (
    <Container className="flex flex-col justify-between">
      <div className={cn("flex flex-row-4 gap-2", { "justify-end": !reverse })}>
        {worker.map((worker, index) => (
          <Unit
            key={index}            
            name={worker.name}
            image={worker.image}
            health={worker.health}
            mana={worker.mana}
            attack={worker.attack}
            price={worker.price}
            reverse={reverse}
          />
        ))}
      </div>
      <div className="flex items-center justify-around">
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
          className="text-[20px] font-bold my-4"
          onClick={addMinerals}
          disabled={worker.length === 0}
        >
          <span>
            Add <b>{worker.length}</b>
          </span>
        </Button>
      </div>
    </Container>
  );
};
