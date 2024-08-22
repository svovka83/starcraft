import React from "react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";
import { MoveLeft, MoveRight } from "lucide-react";

export const HideTurn: React.FC = () => {
  const turn = useGameStore((state) => state.turn);

  return (
    <div
      className={cn(
        turn
          ? "w-[590px] left-[50%] text-red-500"
          : "w-[590px] right-[50%] text-blue-500",
        "fixed top-[10vh] bg-black/0 bottom-0 flex justify-center items-center text-6xl font-extrabold cursor-pointer z-30 group transition-all hover:bg-black/0 duration-300"
      )}
    >
      {turn ? (
        <div>
          <MoveLeft
            size={120}
            className="absolute top-1/4 left-10 translate-x-40 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 duration-500"
          />
          <span className="opacity-0 transition-all group-hover:opacity-100 duration-500">
            Player One Turn
          </span>
        </div>
      ) : (
        <div>
          <MoveRight
            size={120}
            className="absolute top-1/4 right-10 -translate-x-40 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 duration-500"
          />
          <span className="opacity-0 transition-all group-hover:opacity-100 duration-500">
            Player Two Turn
          </span>
        </div>
      )}
    </div>
  );
};
