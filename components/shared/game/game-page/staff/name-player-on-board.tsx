import React from "react";
import { useUserStore } from "@/store/user";

interface Props {
  turn: boolean;
  gameMode: "PLAYER" | "COMPUTER";
}

export const NamePlayerOnBoard: React.FC<Props> = ({ turn, gameMode }) => {
  const playerName = useUserStore().username;
  const getUser = useUserStore().getUser;

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {gameMode === "PLAYER" && (
        <div className="absolute w-full text-center bottom-10 text-3xl text-white font-bold">
          {turn ? playerName : "Player 2"}
        </div>
      )}
      {gameMode === "COMPUTER" && (
        <div className="absolute w-full text-center bottom-10 text-3xl text-white font-bold">
          {turn ? playerName : "Computer"}
        </div>
      )}
    </div>
  );
};
