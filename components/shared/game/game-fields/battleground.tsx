import React from "react";
import { cn } from "@/lib/utils";
import { unitType, useGameStore } from "@/store/game";
import { ChooseUnitSide, Container, Unit } from "../..";
import { button_click } from "@/constants";

interface Props {
  battlegroundUnits: unitType[];
  mana: number;
  reverse: boolean;
}

export const Battleground: React.FC<Props> = ({
  battlegroundUnits,
  mana,
  reverse,
}) => {
  const [activeUnit, setActiveUnit] = React.useState(0);

  const unitConfig = (id: number) => {
    setActiveUnit(id);
    button_click.play();
  };

  const [moveUnitUp, moveUnitDown] = useGameStore((state) => [
    state.moveUnitUp,
    state.moveUnitDown,
  ]);

  React.useEffect(() => {
    setActiveUnit(0);
  }, [mana]);

  return (
    <Container className={cn("w-[40%] flex", { "flex-row-reverse": reverse })}>
      <div
        className={cn("flex flex-wrap mx-8 gap-6 w-[90%]", {
          "flex-row-reverse": reverse,
        })}
      >
        {battlegroundUnits.map(
          ({ id, name, image, health, mana, attack, price }, index) => (
            <div key={index}>
              <Unit
                name={name}
                image={image}
                health={health}
                mana={mana}
                attack={attack}
                price={price}
                setActiveUnit={() => unitConfig(id!)}
                active={activeUnit === id}
                reverse={reverse}
              />
            </div>
          )
        )}
      </div>

      <ChooseUnitSide
        activeUnit={activeUnit}
        moveUnitUp={() => moveUnitUp(activeUnit)}
        moveUnitDown={() => moveUnitDown(activeUnit)}
        mana={mana}
      />
    </Container>
  );
};
