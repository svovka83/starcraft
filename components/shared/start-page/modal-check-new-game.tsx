import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui";

interface Props {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  setIsStartButton: (isStartButton: boolean) => void;
}

export const ModalCheckNewGame: React.FC<Props> = ({
  openModal,
  setOpenModal,
  setIsStartButton,
}) => {
  return (
    <Dialog open={openModal} onOpenChange={() => setOpenModal(false)}>
      <DialogContent className="bg-white text-center">
        <DialogTitle>Warning!</DialogTitle>
        <p>You have a not finished game!</p>
        <p>You will lose all your progress if you start a new game.</p>
        <p>Are you sure you want to start a new game?</p>
        <Button
          onClick={() => {
            setOpenModal(false);
            setIsStartButton(true);
          }}
        >
          YES
        </Button>
        <Button onClick={() => setOpenModal(false)}>NO</Button>
      </DialogContent>
    </Dialog>
  );
};
