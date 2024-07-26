import React from "react";
import { cn } from "@/lib/utils";

import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const ShopModalOne: React.FC<Props> = ({ className }) => {
  const playerUnits = useGameStore((state) => state.player.units);
  const addUnit = useGameStore((state) => state.addUnitToArmy);

  return (
    <div className={cn("fixed top-[40%]", className)}>
      <div className="bg-blue-700 text-white px-10 py-2">
        {playerUnits.map((unit) => (
          <div
            key={unit.id}
            className="grid grid-cols-4 gap-10 my-2 cursor-pointer"
            onClick={() => addUnit(unit.id)}
          >
            <h1>{unit.name}</h1>
            <p>health: {unit.health}</p>
            <p>attack: {unit.attack}</p>
            <b>price: {unit.price}</b>
          </div>
        ))}
      </div>
    </div>
  );
};
