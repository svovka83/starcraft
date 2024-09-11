import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui";
import { button_click } from "@/constants";

interface Props {
  isGame: boolean;
}

export const ContinueButton: React.FC<Props> = ({ isGame }) => {
  return (
    <Link
      href="/game"
      className={cn({
        "pointer-events-none": !isGame,
      })}
    >
      <Button size="lg" disabled={!isGame} onClick={() => button_click.play()}>
        Continue
      </Button>
    </Link>
  );
};
