import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui";
import { CancelGameButton, ContentStartGame, StartGameButton } from "../..";
import Image from "next/image";
import start from "/images/utils/start-background.jpg";

interface Props {
  openStart: boolean;
  closeStartModule: VoidFunction;
  isGame: boolean;
  createGame: VoidFunction;
}

export const WindowBeforeStart: React.FC<Props> = ({
  openStart,
  closeStartModule,
  isGame,
  createGame,
}) => {
  return (
    <Dialog open={openStart} onOpenChange={closeStartModule}>
      <DialogContent className="overflow-hidden">
        <DialogTitle className="text-center text-2xl font-bold text-violet-800 pointer-events-none">
          OK. It`s your setting for game?
        </DialogTitle>

        <ContentStartGame />

        <Image
          src={start}
          alt="bg_start"
          className="absolute top-0 bottom-0 rounded-md -z-10"
        />

        <div className="flex justify-center gap-10 text-[20px] mt-4">
          <StartGameButton isGame={isGame} createGame={createGame} />
          <CancelGameButton closeStartModule={closeStartModule} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
