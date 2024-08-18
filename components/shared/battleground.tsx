import React from "react";
import { cn } from "@/lib/utils";
import { unitType, useGameStore } from "@/store/game";
import { ChooseUnitSide, Container, Unit } from ".";

interface Props {
  battlegroundUnits: unitType[];
  className?: string;
}

export const Battleground: React.FC<Props> = ({
  battlegroundUnits,
  className,
}) => {
  const [activeUnit, setActiveUnit] = React.useState(0);
  const [moveUnitUp, moveUnitDown] = useGameStore((state) => [
    state.moveUnitUp,
    state.moveUnitDown,
  ]);

  return (
    <Container className={cn("w-[40%] flex", className)}>
      <div className={cn("flex flex-wrap mx-8 gap-6 w-[90%]", className)}>
        {battlegroundUnits.map(
          ({ id, name, image, health, mana, attack, price }, index) => (
            <div key={index}>
              <Unit
                id={id}
                name={name}
                image={image}
                health={health}
                mana={mana}
                attack={attack}
                price={price}
                setActiveUnit={() => setActiveUnit(id)}
                active={activeUnit === id}
              />
            </div>
          )
        )}
      </div>

      <ChooseUnitSide
        activeUnit={activeUnit}
        moveUnitUp={() => moveUnitUp(activeUnit)}
        moveUnitDown={() => moveUnitDown(activeUnit)}
      />
    </Container>
  );
};
