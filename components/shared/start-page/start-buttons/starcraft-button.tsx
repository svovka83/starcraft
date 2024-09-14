import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui";
import { button_click } from "@/constants";

interface Props {
  isAuth: boolean;
}

export const StarCraftButton: React.FC<Props> = ({ isAuth }) => {
  return (
    <Link
      href="/starcraft"
      className={cn({
        "pointer-events-none": !isAuth,
      })}
    >
      <Button
        disabled={!isAuth}
        size="lg"
        className="bg-violet-600 hover:bg-violet-700"
        onClick={() => button_click.play()}
      >
        StarCraft
      </Button>
    </Link>
  );
};
