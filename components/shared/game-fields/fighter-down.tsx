import React from "react";
import { cn } from "@/lib/utils";
import { unitType, useGameStore } from "@/store/game";
import { Container, DamageUnit, Unit } from "..";
import { useTriggerAnimate } from "@/store/trigger-animations";

interface Props {
  fighter: unitType;
  reverse: boolean;
}

export const FighterDown: React.FC<Props> = ({ fighter, reverse }) => {
  const { name, image, health, mana, attack, price } = fighter;

  const isAnimateDamageFighterDown = useTriggerAnimate(
    (state) => state.isAnimateDamageFighterDown
  );

  const turn = useGameStore((state) => state.turn);
  const attackDownOne = useGameStore((state) => state.one.fighterDown.attack);
  const attackDownTwo = useGameStore((state) => state.two.fighterDown.attack);

  return (
    <Container className={cn("flex relative items-center justify-center")}>
      <>
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
        <DamageUnit
          turn={turn}
          attackOne={attackDownOne}
          attackTwo={attackDownTwo}
          isAnimateDamage={isAnimateDamageFighterDown}
          reverse={reverse}
        />
      </>
    </Container>
  );
};
