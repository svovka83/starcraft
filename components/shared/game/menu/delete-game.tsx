"use client";

import React from "react";
import { deleteGame } from "@/service/game";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { Alert } from "../..";
import { button_click, finished, wrong } from "@/constants";
import { useGameStore } from "@/store/game";

export const DeleteGame: React.FC = () => {
  const route = useRouter();
  const refreshState = useGameStore().refreshState;

  const removeGame = () => {
    button_click.play();
    deleteGame()
      .then((data) => {
        refreshState();
        finished.play();
        toast.success(data.message, { duration: 2000, icon: "👍" });
        setTimeout(() => {
          route.push("/");
        }, 2000);
      })
      .catch((error) => {
        console.log("[DELETE_GAME]", error.response.data.message);
        wrong.play();
        toast.error(error.response.data.message, {
          duration: 2000,
          icon: "😢",
        });
      });
  };

  return (
    <Alert
      trigger={
        <Button
          onClick={() => button_click.play()}
          variant="destructive"
          className="w-full"
        >
          DELETE GAME
        </Button>
      }
      title="Are you sure delete this game?"
      text="Deleting the game will remove it from the database forever."
      toConfirm={removeGame}
    />
  );
};
