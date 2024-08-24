import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "..";
import { Button } from "@/components/ui";
import { useGameStore } from "@/store/game";

export const Staff: React.FC = () => {
  const [manaOne, manaTwo, endTurn] = useGameStore((state) => [
    state.one.mana,
    state.two.mana,
    state.endTurn,
  ]);

  return (
    <Container
      className={cn("flex items-center justify-center text-xl font-bold z-50")}
    >
      {(manaOne === 0 || manaTwo === 0) && (
        <Button onClick={endTurn}>end turn</Button>
      )}
    </Container>
  );
};
