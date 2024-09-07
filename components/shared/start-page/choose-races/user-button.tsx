import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { useUserStore } from "@/store/user";
import { howler_push } from "@/constants";

interface Props {
  currentPlayer: string;
  setCurrentPlayer: (currentPlayer: string) => void;
}

export const UserButton: React.FC<Props> = ({
  currentPlayer,
  setCurrentPlayer,
}) => {
  const [username, error, getUser] = useUserStore((state) => [
    state.username,
    state.error,
    state.getUser,
  ]);

  const clickUserButton = () => {
    setCurrentPlayer("playerOne");
    howler_push.play();
  };

  React.useEffect(() => {
    getUser();
  }, [username]);
  return (
    <div className="w-48 flex items-center flex-col">
      <Button
        className={cn("w-32 text-lg border-2 border-blue-600", {
          "border-2 border-white": currentPlayer === "playerOne",
        })}
        onClick={clickUserButton}
      >
        {username ? username : "No User"}
      </Button>
      <span className="mt-4 text-lg text-red-600 font-bold">
        {!username ? `* ${error}` : ""}
      </span>
    </div>
  );
};
