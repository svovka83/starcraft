"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { REGULATIONS } from "@/constants";
import { Circle, CircleArrowLeft, CircleArrowRight } from "lucide-react";

export const Regulations: React.FC = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-violet-700">
        {counter === REGULATIONS[counter].id &&
          REGULATIONS[counter].id + ". " + REGULATIONS[counter].name}
      </h1>
      <div className="flex justify-around items-center my-8">
        <CircleArrowLeft
          size={54}
          className={cn(
            "text-violet-600 active:-translate-x-1 cursor-pointer",
            counter === 0 && "invisible"
          )}
          onClick={() => setCounter(counter - 1)}
        />

        {counter === REGULATIONS[counter].id && (
          <img
            src={REGULATIONS[counter].image}
            className="w-[80%] max-h-[471.3px]"
            alt={`regulation_${REGULATIONS[counter].name}`}
          />
        )}

        <CircleArrowRight
          size={54}
          className={cn(
            "text-violet-600 active:translate-x-1 cursor-pointer",
            counter === REGULATIONS.length - 1 && "invisible"
          )}
          onClick={() => setCounter(counter + 1)}
        />
      </div>

      <div className="mb-8 text-center text-2xl font-bold text-violet-700">
        {REGULATIONS.map((regulation) => (
          <span
            key={regulation.id}
            className="relative"
            onClick={() => setCounter(regulation.id)}
          >
            <Circle
              size={44}
              className={cn(
                "inline text-violet-600 cursor-pointer",
                counter === regulation.id && "text-orange-500"
              )}
            />
            <span
              className={cn(
                "absolute right-0 left-0 translate-y-[20%] cursor-pointer",
                counter === regulation.id && "text-orange-500"
              )}
            >
              {regulation.id}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
