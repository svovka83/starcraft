import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { button_click, howler_push, LEVELS } from "@/constants";
import { Level, useLevelStore } from "@/store/level";

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
  const [openChooseLevel, setOpenChooseLevel] = React.useState(false);

  const { name } = useLevelStore().level;
  const setChooseLevel = useLevelStore().setChooseLevel;

  const chooseCurrentPlayer = () => {
    howler_push.play();
    setCurrentPlayer("playerTwo");
  };

  const clickChooseLevel = () => {
    chooseCurrentPlayer();
    setOpenChooseLevel(!openChooseLevel);
  };

  const selectLevel = (level: Level) => {
    button_click.play();
    setChooseLevel(level);
    setOpenChooseLevel(false);
  };

  return (
    <div className="w-48">
      <Button
        className={cn("w-32 text-lg border-2 border-blue-600", {
          "border-2 border-white": currentPlayer === "playerTwo",
        })}
        onClick={chooseCurrentPlayer}
      >
        {gameMode === "COMPUTER" ? "Computer" : "Player"}
      </Button>
      {gameMode === "COMPUTER" && (
        <Button
          variant="starcraft"
          className={cn("w-32 text-lg mt-4 border-2 border-blue-600", {
            "border-2 border-white": currentPlayer === "playerTwo",
          })}
          onClick={clickChooseLevel}
        >
          {name}
        </Button>
      )}
      {openChooseLevel && gameMode === "COMPUTER" && (
        <ul className="mt-6">
          {LEVELS.map((level, index) => (
            <li key={index} className="mb-2">
              <Button
                variant="starcraft"
                className="w-32 text-lg border-2 border-blue-600"
                onClick={() => selectLevel(level)}
              >
                {level.name}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
