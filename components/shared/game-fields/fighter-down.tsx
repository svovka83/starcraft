import React from "react";
import { cn } from "@/lib/utils";
import { unitType } from "@/store/game";
import { Container, Unit } from "..";

interface Props {
  fighter: unitType;
  reverse: boolean;
}

export const FighterDown: React.FC<Props> = ({ fighter, reverse }) => {
  const { name, image, health, mana, attack, price } = fighter;

  return (
    <Container className={cn("flex items-center justify-center")}>
      {name && (
        <Unit
          name={name}
          image={image}
          health={health}
          mana={mana}
          attack={attack}
          price={price}
          reverse={reverse}
        />
      )}
    </Container>
  );
};
