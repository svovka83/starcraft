import React from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "../../../ui";
import { unitType, useGameStore } from "@/store/game";
import { ShopContent } from "../..";
import { X } from "lucide-react";

interface Props {
  playerUnits: unitType[];
  battleLength: number;
  mana: number;
  currentMana: number;
  minerals: number;
  showModalShop: boolean;
  closeModal: () => void;
}

export const ShopModal: React.FC<Props> = ({
  playerUnits,
  battleLength,
  mana,
  minerals,
  currentMana,
  showModalShop,
  closeModal,
}) => {
  const [activeUnit, setActiveUnit] = React.useState(0);

  const { buyUnit } = useGameStore();

  const addUnitToArmy = (unitId: number) => {
    buyUnit(unitId);
    setActiveUnit(0);
    closeModal();
  };

  React.useEffect(() => {
    if (!showModalShop) setActiveUnit(0);
  }, [showModalShop]);

  return (
    <Dialog open={showModalShop} onOpenChange={closeModal}>
      <DialogContent className="max-w-[691px]  bg-blue-700 text-white">
        <DialogTitle className="flex justify-between text-3xl">
          <h2 className="pointer-events-none">Choose unit for your army</h2>
          <X
            className="cursor-pointer active:translate-y-[1px]"
            onClick={closeModal}
          />
        </DialogTitle>
        <div className="flex flex-wrap gap-4">
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
                disabled={
                  minerals < unit.price ||
                  mana < unit.mana ||
                  battleLength === 8
                }
              />
            ))
            .slice(
              1,
              (currentMana === 3 && 4) ||
                (currentMana === 4 && 7) ||
                (currentMana === 5 && 9) ||
                (currentMana === 6 && 10) ||
                0
            )}
        </div>
        <Button
          disabled={!activeUnit}
          onClick={() => addUnitToArmy(activeUnit)}
          variant="secondary"
          className="text-lg font-bold hover:bg-white/85"
        >
          Buy Unit
        </Button>
      </DialogContent>
    </Dialog>
  );
};
