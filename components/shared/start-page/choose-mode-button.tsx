import React from "react";
import { useGameStore } from "@/store/game";
import { Button } from "@/components/ui";

export const ChooseModeButton: React.FC = () => {
  const [gameMode, chooseGameMode] = useGameStore((state) => [
    state.gameMode,
    state.chooseGameMode,
  ]);

  return (
    <div>
      {gameMode === "PLAYER" && (
        <Button
          size="lg"
          className="bg-indigo-500 hover:bg-indigo-600 px-10"
          onClick={() => {
            chooseGameMode("COMPUTER");
          }}
        >
          VS player
        </Button>
      )}
      {gameMode === "COMPUTER" && (
        <Button
          size="lg"
          className="bg-indigo-500 hover:bg-indigo-600 px-6"
          onClick={() => {
            chooseGameMode("PLAYER");
          }}
        >
          VS computer
        </Button>
      )}
    </div>
  );
};
