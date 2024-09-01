import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "..";
import { Button } from "@/components/ui";
import { useGameStore } from "@/store/game";
import toast from "react-hot-toast";

export const Staff: React.FC = () => {
  const [manaOne, manaTwo, endTurn, getSaveGame] = useGameStore((state) => [
    state.one.mana,
    state.two.mana,
    state.endTurn,
    state.getSaveGame,
  ]);

  const saveGame = () => {
    getSaveGame()
      .then((data: any) => {
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

  return (
    <Container
      className={cn("flex items-center justify-center text-xl font-bold z-50")}
    >
      <Button onClick={saveGame}>SAVE</Button>
      {(manaOne === 0 || manaTwo === 0) && (
        <Button onClick={endTurn}>end turn</Button>
      )}
    </Container>
  );
};
