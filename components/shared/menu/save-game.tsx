import React from "react";
import { useGameStore } from "@/store/game";
import { Button } from "@/components/ui";
import toast from "react-hot-toast";

interface Props {
  setOpenMenu: (openMenu: boolean) => void;
}

export const SaveGame: React.FC<Props> = ({ setOpenMenu }) => {
  const getSaveGame = useGameStore((state) => state.getSaveGame);

  const saveGame = () => {
    getSaveGame()
      .then((data: any) => {
        setOpenMenu(false);
        toast.success(data.message, {
          duration: 2000,
          icon: "👍",
        });
      })
      .catch((error) => {
        console.log("[SAVE_GAME]", error.response.data.message);
        toast.error(error.response.data.message, {
          duration: 2000,
          icon: "😢",
        });
      });
  };
  return <Button onClick={saveGame}>SAVE GAME</Button>;
};
