import React from "react";
import { WindowBeforeStart } from "../..";
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
  const [openStart, setOpenStart] = React.useState(false);

  const openStartModule = () => {
    button_click.play();
    setOpenStart(true);
  };

  const closeStartModule = () => {
    button_click.play();
    setOpenStart(false);
  };

  return (
    <div>
      <Button
        size="lg"
        variant="success"
        disabled={!(nameOne && nameTwo && isAuth) ? true : false}
        onClick={openStartModule}
      >
        New game
      </Button>

      <WindowBeforeStart
        openStart={openStart}
        closeStartModule={closeStartModule}
        isGame={isGame}
        createGame={createGame}
      />
    </div>
  );
};
