import React from "react";
import { Container, SoundGame, StartTurn } from "..";
import { Button } from "@/components/ui";
import { useGameStore } from "@/store/game";

export const Staff: React.FC = () => {
  const [turn, message, manaOne, manaTwo, endTurn, logicAI] = useGameStore(
    (state) => [
      state.turn,
      state.message,
      state.one.mana,
      state.two.mana,
      state.endTurn,
      state.logicAI,
    ]
  );

  if (!turn) {
    setTimeout(() => {
      logicAI();
    }, 3000);
  }

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
      <div className="absolute bottom-0 mx-2 text-2xl text-blue-700 font-bold">
        {turn ? `player: ${message}` : `comp: ${message}`}
      </div>
      {/* <SoundGame /> */}
    </Container>
  );
};
