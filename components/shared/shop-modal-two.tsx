import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
  modal: boolean;
  setModal: (modal: boolean) => void;
}

export const ShopModalTwo: React.FC<Props> = ({
  modal,
  setModal,
  className,
}) => {
  const playerUnits = useGameStore((state) => state.two.units);
  const addUnit = useGameStore((state) => state.addUnitToArmy);

  const addUnitToArmy = (unitId: number) => {
    addUnit(unitId);
    setModal(!modal);
  };

  return (
    <div className={cn("fixed top-[10vh] left-0 right-0 mx-[25%]", className)}>
      <div className="bg-blue-700 text-white px-10 py-2">
        {playerUnits.map(({ id, name, image, health, mana, attack, price }) => (
          <div
            key={id}
            className="grid grid-cols-6 gap-10 my-2 cursor-pointer"
            onClick={() => addUnitToArmy(id)}
          >
            <h1>{name}</h1>
            <Image src={image} alt="unit" width={100} height={100} />
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
