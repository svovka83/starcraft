import React from "react";
import { cn } from "@/lib/utils";

import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
  modal: boolean;
  setModal: (modal: boolean) => void;
}

export const ShopModalOne: React.FC<Props> = ({
  modal,
  setModal,
  className,
}) => {
  const playerUnits = useGameStore((state) => state.one.units);
  const addUnit = useGameStore((state) => state.addUnitToArmy);

  return (
    <div className={cn("fixed top-[10vh] left-0 right-0 mx-[25%]", className)}>
      <div className="bg-blue-700 text-white px-10 py-2">
        {playerUnits.map(({ id, name, health, mana, attack, price }) => (
          <div
            key={id}
            className="grid grid-cols-5 gap-10 my-2 cursor-pointer"
            onClick={() => {
              addUnit(id);
              setModal(!modal);
            }}
          >
            <h1>{name}</h1>
            <p>health: {health}</p>
            <p>mana: {mana}</p>
            <p>attack: {attack}</p>
            <b>price: {price}</b>
          </div>
        ))}
      </div>
    </div>
  );
};
