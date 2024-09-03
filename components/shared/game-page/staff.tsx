import React from "react";
import { Container, SoundGame, StartTurn } from "..";
import { Button } from "@/components/ui";
import { useGameStore } from "@/store/game";

export const Staff: React.FC = () => {
  const [manaOne, manaTwo, endTurn] = useGameStore((state) => [
    state.one.mana,
    state.two.mana,
    state.endTurn,
  ]);

  return (
    <Container className={"relative"}>
      <StartTurn />
      {(manaOne === 0 || manaTwo === 0) && (
        <Button
          className={"absolute right-0 left-0 mx-14 text-xl font-bold z-50"}
          onClick={endTurn}
        >
          end turn
        </Button>
      )}
      <SoundGame />
    </Container>
  );
};
