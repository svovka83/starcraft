import React from "react";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import { useGameStore } from "@/store/game";

export const ContentStartGame: React.FC = () => {
  const player = useUserStore().username;
  const opponent = useGameStore().gameMode;
  const nameOne = useGameStore().one.name;
  const nameTwo = useGameStore().two.name;
  const avatarOne = useGameStore().one.avatar;
  const avatarTwo = useGameStore().two.avatar;

  return (
    <div className="flex items-center justify-around text-center text-white font-bold text-[24px] pointer-events-none">
      <div
        className={cn("flex flex-col items-center", {
          "text-blue-700": nameOne === "Terran",
          "text-red-700": nameOne === "Zerg",
          "text-orange-600": nameOne === "Protoss",
        })}
      >
        <span>{player}</span>
        <span>{nameOne}</span>
        <img src={avatarOne} className="w-28 h-28 rounded-sm" alt="player" />
      </div>
      <div className="text-3xl text-violet-800 font-extrabold">VS</div>
      <div
        className={cn("flex flex-col items-center", {
          "text-blue-700": nameTwo === "Terran",
          "text-red-700": nameTwo === "Zerg",
          "text-orange-600": nameTwo === "Protoss",
        })}
      >
        <span>{opponent === "COMPUTER" ? "Computer" : "Player"}</span>
        <span>{nameTwo}</span>
        <img
          src={avatarTwo}
          className="w-28 h-28 rounded-sm scale-x-[-1]"
          alt="opponent"
        />
      </div>
    </div>
  );
};
