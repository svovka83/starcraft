import React from "react";
import { useGameStore } from "@/store/game";
import { Button } from "@/components/ui";
import toast from "react-hot-toast";
import { button_click, finished, wrong } from "@/constants";

interface Props {
  setOpenMenu: (openMenu: boolean) => void;
}

export const SaveGame: React.FC<Props> = ({ setOpenMenu }) => {
  const isLoading = useGameStore((state) => state.isLoading);
  const getSaveGame = useGameStore((state) => state.getSaveGame);

  const saveGame = () => {
    button_click.play();
    getSaveGame()
      .then((data: any) => {
        setOpenMenu(false);
        finished.play();
        toast.success(data.message, {
          duration: 2000,
          icon: "👍",
        });
      })
      .catch((error) => {
        console.log("[SAVE_GAME]", error.response.data.message);
        wrong.play();
        toast.error(error.response.data.message, {
          duration: 2000,
          icon: "😢",
        });
      });
  };
  return (
    <Button loading={isLoading} onClick={saveGame}>
      SAVE GAME
    </Button>
  );
};
