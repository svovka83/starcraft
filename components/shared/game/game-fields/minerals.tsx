import React from "react";
import { cn } from "@/lib/utils";
import { unitType } from "@/store/game";
import { Container, Explosion, Unit } from "../..";
import { useGameStore } from "@/store/game";
import { Button } from "../../../ui";
import { useTriggerAnimate } from "@/store/trigger-animations";
import { explosion_unit } from "@/constants";

interface Props {
  worker: unitType[];
  mine: number;
  reverse: boolean;
}

export const Minerals: React.FC<Props> = ({ worker, mine, reverse }) => {
  const addMinerals = useGameStore((state) => state.addMinerals);

  const isAnimateDamageWorkerOne = useTriggerAnimate(
    (state) => state.isAnimateDamageWorkerOne
  );
  const isAnimateDamageWorkerTwo = useTriggerAnimate(
    (state) => state.isAnimateDamageWorkerTwo
  );

  return (
    <Container className="flex flex-col justify-between">
      <div
        className={cn("relative flex flex-row-4 gap-2", {
          "justify-end": !reverse,
        })}
      >
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
        {!reverse && (
          <Explosion
            isAnimate={isAnimateDamageWorkerOne}
            effect={explosion_unit}
            className={cn("top-8 right-5", { "left-5": reverse })}
          />
        )}
        {reverse && (
          <Explosion
            isAnimate={isAnimateDamageWorkerTwo}
            effect={explosion_unit}
            className={cn("top-8 right-5", { "left-5": reverse })}
          />
        )}
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
        <span className="absolute bottom-10 translate-x-16 w-[16px] h-[16px] text-center text-white text-[12px] font-bold bg-blue-500 pointer-events-none">
          1
        </span>
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
