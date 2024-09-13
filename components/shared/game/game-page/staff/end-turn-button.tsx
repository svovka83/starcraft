import React from "react";
import { Button } from "@/components/ui";
import { useGameStore } from "@/store/game";

interface Props {
  turn: boolean;
  gameMode: "PLAYER" | "COMPUTER";
}

export const EndTurnButton: React.FC<Props> = ({ turn, gameMode }) => {
  const [manaOne, manaTwo, endTurn] = useGameStore((state) => [
    state.one.mana,
    state.two.mana,
    state.endTurn,
  ]);

  return (
    <div>
      {(manaOne === 0 || manaTwo === 0) && (
        <Button
          disabled={!turn && gameMode === "COMPUTER"}
          className={"absolute right-0 left-0 mx-14 text-xl font-bold z-40"}
          onClick={endTurn}
        >
          end turn
        </Button>
      )}
    </div>
  );
};
