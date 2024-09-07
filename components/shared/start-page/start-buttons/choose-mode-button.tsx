import React from "react";
import { GameState, useGameStore } from "@/store/game";
import { Button } from "@/components/ui";
import { howler_push } from "@/constants";

interface Props {
  isAuth: boolean;
}

export const ChooseModeButton: React.FC<Props> = ({ isAuth }) => {
  const [gameMode, chooseGameMode] = useGameStore((state: GameState) => [
    state.gameMode,
    state.chooseGameMode,
  ]);

  const chooseComputer = () => {
    chooseGameMode("COMPUTER");
    howler_push.play();
  };
  const choosePlayer = () => {
    chooseGameMode("PLAYER");
    howler_push.play();
  };

  return (
    <div>
      {gameMode === "PLAYER" && (
        <Button
          size="lg"
          disabled={!isAuth}
          className="bg-indigo-500 hover:bg-indigo-600 px-10"
          onClick={chooseComputer}
        >
          VS player
        </Button>
      )}
      {gameMode === "COMPUTER" && (
        <Button
          size="lg"
          disabled={!isAuth}
          className="bg-indigo-500 hover:bg-indigo-600 px-6"
          onClick={choosePlayer}
        >
          VS computer
        </Button>
      )}
    </div>
  );
};
