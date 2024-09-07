import React from "react";
import { cn } from "@/lib/utils";
import { unitType, useGameStore } from "@/store/game";
import { Container, DamageUnit, Unit } from "..";
import { useTriggerAnimate } from "@/store/trigger-animations";

interface Props {
  fighter: unitType;
  reverse: boolean;
}

export const FighterUp: React.FC<Props> = ({ fighter, reverse }) => {
  const { name, image, health, mana, attack, price } = fighter;

  const isAnimateDamageFighterUp = useTriggerAnimate(
    (state) => state.isAnimateDamageFighterUp
  );

  const turn = useGameStore((state) => state.turn);
  const attackUpOne = useGameStore((state) => state.one.fighterUp.attack);
  const attackUpTwo = useGameStore((state) => state.two.fighterUp.attack);

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
          attackOne={attackUpOne}
          attackTwo={attackUpTwo}
          isAnimateDamage={isAnimateDamageFighterUp}
          reverse={reverse}
        />
      </>
    </Container>
  );
};
