import React from "react";
import { Button } from "../../ui";
import { unitType, useGameStore } from "@/store/game";
import { Dialog, DialogContent, DialogTitle } from "../../ui/dialog";
import { ShopContent } from "..";
import toast from "react-hot-toast";

interface Props {
  playerUnits: unitType[];
  showModalShop: boolean;
  closeModal: () => void;
  minerals: number;
  mana: number;
}

export const ShopModal: React.FC<Props> = ({
  playerUnits,
  showModalShop,
  closeModal,
  minerals,
  mana,
}) => {
  const [activeUnit, setActiveUnit] = React.useState(0);

  const addUnit = useGameStore((state) => state.buyUnit);

  const addUnitToArmy = (unitId: number) => {
    addUnit(unitId);
    setActiveUnit(0);
    closeModal();
    toast.success(`Unit added to your army`);
  };

  return (
    <Dialog open={showModalShop} onOpenChange={closeModal}>
      <DialogContent className="px-12 w-[800px] max-w-[900px] min-h-[400px] bg-blue-700/70 text-white overflow-hidden">
        <DialogTitle className="text-3xl">
          Choose unit for your army
        </DialogTitle>
        {playerUnits
          .map((unit) => (
            <ShopContent
              key={unit.id}
              name={unit.name}
              image={unit.image}
              health={unit.health}
              mana={unit.mana}
              attack={unit.attack}
              price={unit.price}
              activated={() => setActiveUnit(unit.id as number)}
              active={activeUnit === unit.id}
              disabled={minerals < unit.price || mana < unit.mana}
            />
          ))
          .slice(1, 5)}
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
