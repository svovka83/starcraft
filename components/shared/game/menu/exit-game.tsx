"use client";

import React from "react";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { Alert } from "../..";
import { button_click, shutdown } from "@/constants";

export const ExitGame: React.FC = () => {
  const route = useRouter();

  const exitGame = () => {
    button_click.play();
    setTimeout(() => {
      route.push("/");
      shutdown.play();
    }, 1000);
  };
  return (
    <Alert
      trigger={
        <Button onClick={() => button_click.play()} className="w-full">
          EXIT GAME
        </Button>
      }
      title="Are you sure exit this game?"
      text="Unsaved game will be lost. Save your game before exiting."
      toConfirm={exitGame}
    />
  );
};
