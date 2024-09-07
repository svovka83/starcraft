import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { howler_push } from "@/constants";

interface Props {
  currentPlayer: string;
  setCurrentPlayer: (currentPlayer: string) => void;
  gameMode: string;
}

export const OpponentButton: React.FC<Props> = ({
  currentPlayer,
  setCurrentPlayer,
  gameMode,
}) => {
  const clickOpponentButton = () => {
    setCurrentPlayer("playerTwo");
    howler_push.play();
  };

  return (
    <div className="w-48">
      <Button
        className={cn("w-32 text-lg border-2 border-blue-600", {
          "border-2 border-white": currentPlayer === "playerTwo",
        })}
        onClick={clickOpponentButton}
      >
        {gameMode === "COMPUTER" ? "Computer" : "Player"}
      </Button>
    </div>
  );
};
