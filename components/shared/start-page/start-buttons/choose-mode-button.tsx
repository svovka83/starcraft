import React from "react";
import { GameState, useGameStore } from "@/store/game";
import { Button } from "@/components/ui";
import { LEVELS, howler_push } from "@/constants";
import { useLevelStore } from "@/store/level";

interface Props {
  isAuth: boolean;
}

export const ChooseModeButton: React.FC<Props> = ({ isAuth }) => {
  const [gameMode, chooseGameMode] = useGameStore((state: GameState) => [
    state.gameMode,
    state.chooseGameMode,
  ]);
  const setChooseLevel = useLevelStore().setChooseLevel;

  const chooseComputer = () => {
    howler_push.play();
    chooseGameMode("COMPUTER");
  };
  const choosePlayer = () => {
    howler_push.play();
    setChooseLevel(LEVELS[0]);
    chooseGameMode("PLAYER");
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
