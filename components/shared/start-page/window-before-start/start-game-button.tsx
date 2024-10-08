import React from "react";
import { Alert } from "../..";
import { Button } from "@/components/ui";
import { button_click } from "@/constants";

interface Props {
  isGame: boolean;
  createGame: VoidFunction;
}

export const StartGameButton: React.FC<Props> = ({ isGame, createGame }) => {
  return (
    <div>
      {isGame ? (
        <Alert
          trigger={
            <Button
              onClick={() => button_click.play()}
              size="lg"
              variant="success"
            >
              Start
            </Button>
          }
          title="Warning!"
          text="You have a not finished game! 
          You will lose all your progress if you start a new game.
          Are you sure you want to start a new game?"
          toConfirm={createGame}
        />
      ) : (
        <Button size="lg" variant="success" onClick={createGame}>
          Start
        </Button>
      )}
    </div>
  );
};
