import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dialog } from "../ui";
import { unitType, useGameStore } from "@/store/game";
import { DialogContent } from "../ui/dialog";

interface Props {
  playerUnits: unitType[];
  modal: boolean;
  setModal: (modal: boolean) => void;
  className?: string;
}

export const ShopModal: React.FC<Props> = ({
  playerUnits,
  modal,
  setModal,
  className,
}) => {
  const addUnit = useGameStore((state) => state.addUnitToArmy);

  const addUnitToArmy = (unitId: number) => {
    addUnit(unitId);
    setModal(!modal);
  };

  return (
    <Dialog open={modal} onOpenChange={() => setModal(!modal)}>
      <DialogContent
        className={cn(
          "px-12 w-[800px] max-w-[900px] min-h-[400px] bg-blue-700/70 text-white overflow-hidden",
          className
        )}
      >
        <h1 className="text-2xl">Choose unit for your army</h1>
        {playerUnits.map(({ id, name, image, health, mana, attack, price }) => (
          <div
            key={id}
            className="grid grid-cols-6 gap-10 pl-6 items-center cursor-pointer bg-black rounded-2xl hover:translate-x-2 duration-200"
            onClick={() => addUnitToArmy(id)}
          >
            <p className="text-2xl">{name}</p>
            <Image src={image} alt="unit" width={80} height={80} />
            <p>health: {health}</p>
            <p>mana: {mana}</p>
            <p>attack: {attack}</p>
            <b>price: {price}</b>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};
