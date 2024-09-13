import React from "react";
import { useUserStore } from "@/store/user";
import { Skeleton } from "@/components/ui";

interface Props {
  turn: boolean;
  gameMode: "PLAYER" | "COMPUTER";
}

export const NamePlayerOnBoard: React.FC<Props> = ({ turn, gameMode }) => {
  const loading = useUserStore().loading;
  const playerName = useUserStore().username;
  const getUser = useUserStore().getUser;

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {loading && (
        <div className="absolute bottom-11 ml-[15%] w-[70%] text-2xl text-white font-bold">
          <Skeleton className="h-8 bg-slate-400 text-center">
            ...loading
          </Skeleton>
        </div>
      )}

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
