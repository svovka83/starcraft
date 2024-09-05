import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui";

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
      <Button size="lg" disabled={!isGame}>
        Continue
      </Button>
    </Link>
  );
};
