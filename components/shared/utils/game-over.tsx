"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { deleteGame } from "@/service/game";
import toast from "react-hot-toast";

interface Props {
  gameOver?: boolean;
  setGameOver: (modalOver: boolean) => void;
}

export const GameOver: React.FC<Props> = ({ gameOver, setGameOver }) => {
  const router = useRouter();

  const gameIsOver = () => {
    deleteGame().then(() => {
      toast.success("Thanks for playing ❤️", {
        duration: 3000,
      });
    });
    setTimeout(() => {
      setGameOver(false);
      router.push("/");
    }, 5000);
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
