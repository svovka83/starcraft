"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

interface Props {
  modalOver?: boolean;
  setModalOver: (modalOver: boolean) => void;
}

export const GameOver: React.FC<Props> = ({ modalOver, setModalOver }) => {
  const router = useRouter();

  const gameOver = () => {
    setModalOver(false);
    router.back();
  };

  return (
    <Dialog open={modalOver}>
      <DialogContent className="text-center">
        <DialogTitle>Game over</DialogTitle>
        Congratulation!!!
        <Button
          onClick={gameOver}
          variant="secondary"
          className="w-32 text-lg font-bold mx-auto"
        >
          Leave game
        </Button>
      </DialogContent>
    </Dialog>
  );
};
