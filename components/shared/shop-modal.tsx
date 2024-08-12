import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { unitType, useGameStore } from "@/store/game";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { ShopContent } from ".";
import toast from "react-hot-toast";

interface Props {
  playerUnits: unitType[];
  modal: boolean;
  setModal: (modal: boolean) => void;
  minerals: number;
  className?: string;
}

export const ShopModal: React.FC<Props> = ({
  playerUnits,
  modal,
  setModal,
  minerals,
  className,
}) => {
  const [activeUnit, setActiveUnit] = React.useState(0);

  const addUnit = useGameStore((state) => state.buyUnit);

  const addUnitToArmy = (unitId: number) => {
    addUnit(unitId);
    setModal(!modal);
    setActiveUnit(0);
    toast.success("Unit added to your army", { duration: 3000 });
  };

  return (
    <Dialog open={modal} onOpenChange={() => setModal(!modal)}>
      <DialogContent
        className={cn(
          "px-12 w-[800px] max-w-[900px] min-h-[400px] bg-blue-700/70 text-white overflow-hidden",
          className
        )}
      >
        <DialogTitle className="text-3xl">
          Choose unit for your army
        </DialogTitle>
        {playerUnits.map((unit) => (
          <ShopContent
            key={unit.id}
            id={unit.id}
            name={unit.name}
            image={unit.image}
            health={unit.health}
            mana={unit.mana}
            attack={unit.attack}
            price={unit.price}
            setActiveUnit={setActiveUnit}
            active={activeUnit === unit.id}
            disabled={minerals < unit.price}
          />
        ))}
        <Button
          disabled={!activeUnit}
          onClick={() => addUnitToArmy(activeUnit)}
          variant="secondary"
          className="text-lg font-bold"
        >
          Buy Unit
        </Button>
      </DialogContent>
    </Dialog>
  );
};
