"use client";

import React from "react";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { Alert } from "..";

export const ExitGame: React.FC = () => {
  const route = useRouter();

  const exitGame = () => route.push("/");
  return (
    <Alert
      trigger={<Button className="w-full">EXIT GAME</Button>}
      title="Are you sure exit this game?"
      toConfirm={exitGame}
    />
  );
};
