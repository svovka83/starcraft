import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui";
import { useToken } from "@/hooks/use-token";
import { ModalCheckNewGame } from "..";

interface Props {
  nameOne: string;
  nameTwo: string;
  createGame: VoidFunction;
}

export const StartButtons: React.FC<Props> = ({
  nameOne,
  nameTwo,
  createGame,
}) => {
  const [isStartButton, setIsStartButton] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const isContinue = useToken();

  const checkNewGame = () => {
    if (!isContinue) {
      return setIsStartButton(true);
    }

    return setOpenModal(true);
  };

  return (
    <div>
      {isStartButton && (
        <Link
          href="/game"
          className={cn("text-[24px]", {
            "pointer-events-none": nameOne && nameTwo ? false : true,
          })}
        >
          <Button
            size="lg"
            disabled={nameOne && nameTwo ? false : true}
            onClick={createGame}
          >
            Start
          </Button>
        </Link>
      )}

      {!isStartButton && (
        <div className="flex justify-center gap-8 text-[22px]">
          <Button size="lg" onClick={checkNewGame}>
            New game
          </Button>
          <Link
            href="/game"
            className={cn({
              "pointer-events-none": !isContinue,
            })}
          >
            <Button size="lg" disabled={!isContinue}>
              Continue
            </Button>
          </Link>
        </div>
      )}

      <ModalCheckNewGame
        openModal={openModal}
        setOpenModal={setOpenModal}
        setIsStartButton={setIsStartButton}
      />
    </div>
  );
};
