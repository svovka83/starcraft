import React from "react";
import { Alert } from "../..";
import { Button } from "@/components/ui";
import { button_click } from "@/constants";

interface Props {
  nameOne: string;
  nameTwo: string;
  createGame: VoidFunction;
  isAuth: boolean;
  isGame: boolean;
}

export const NewGameButton: React.FC<Props> = ({
  nameOne,
  nameTwo,
  createGame,
  isAuth,
  isGame,
}) => {
  return (
    <div>
      {isGame && nameOne && nameTwo && isAuth ? (
        <Alert
          trigger={
            <Button
              onClick={() => button_click.play()}
              size="lg"
              variant="success"
            >
              New game
            </Button>
          }
          title="Warning!"
          text="You have a not finished game! 
          You will lose all your progress if you start a new game.
          Are you sure you want to start a new game?"
          toConfirm={createGame}
        />
      ) : (
        <Button
          size="lg"
          variant="success"
          disabled={!(nameOne && nameTwo && isAuth) ? true : false}
          onClick={createGame}
        >
          New game
        </Button>
      )}
    </div>
  );
};
