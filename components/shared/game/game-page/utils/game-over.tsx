"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { deleteGame } from "@/service/game";
import toast from "react-hot-toast";
import { game_over, game_over_sound } from "@/constants";
import { useGameStore } from "@/store/game";

interface Props {
  gameOver?: boolean;
  setGameOver: (modalOver: boolean) => void;
}

export const GameOver: React.FC<Props> = ({ gameOver, setGameOver }) => {
  const router = useRouter();
  const refreshState = useGameStore().refreshState;

  if (gameOver) {
    game_over.play();
    setTimeout(() => {
      game_over_sound.play();
    }, 3000);
    setTimeout(() => {
      game_over.play();
    }, 8000);
  }

  const gameIsOver = () => {
    deleteGame().then(() => {
      toast.success("Thanks for playing ❤️", {
        duration: 3000,
      });
    });
    setTimeout(() => {
      game_over_sound.stop();
      setGameOver(false);
      refreshState();
      router.push("/");
    }, 4000);
  };

  return (
    <Dialog open={gameOver}>
      <DialogContent className="text-center bg-blue-500">
        <DialogTitle className="text-white text-3xl">Game over</DialogTitle>
        <Button
          onClick={gameIsOver}
          variant="secondary"
          className="w-40 text-xl font-bold mx-auto"
        >
          Leave game
        </Button>
      </DialogContent>
    </Dialog>
  );
};
