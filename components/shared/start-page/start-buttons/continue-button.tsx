import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui";
import { button_click, start_game } from "@/constants";

interface Props {
  isGame: boolean;
}

const continueGame = () => {
  button_click.play();
  start_game.play();
};

export const ContinueButton: React.FC<Props> = ({ isGame }) => {
  return (
    <Link
      href="/game"
      className={cn({
        "pointer-events-none": !isGame,
      })}
    >
      <Button size="lg" disabled={!isGame} onClick={continueGame}>
        Continue
      </Button>
    </Link>
  );
};
