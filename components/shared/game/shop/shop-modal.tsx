import React from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "../../../ui";
import { unitType, useGameStore } from "@/store/game";
import { ShopContent } from "../..";
import { button_click } from "@/constants";
import { X } from "lucide-react";

interface Props {
  playerUnits: unitType[];
  battleLength: number;
  showModalShop: boolean;
  closeModal: () => void;
  minerals: number;
  mana: number;
}

export const ShopModal: React.FC<Props> = ({
  playerUnits,
  battleLength,
  showModalShop,
  closeModal,
  minerals,
  mana,
}) => {
  const [activeUnit, setActiveUnit] = React.useState(0);

  const { buyUnit } = useGameStore();

  const addUnitToArmy = (unitId: number) => {
    buyUnit(unitId);
    setActiveUnit(0);
    closeModal();
  };

  if (showModalShop) button_click.play();

  React.useEffect(() => {
    if (!showModalShop) setActiveUnit(0);
  }, [showModalShop]);

  return (
    <Dialog open={showModalShop} onOpenChange={closeModal}>
      <DialogContent className="px-12 w-[800px] max-w-[900px] min-h-[400px] bg-blue-700/70 text-white overflow-hidden">
        <DialogTitle className="flex justify-between text-3xl">
          <h2 className="pointer-events-none">Choose unit for your army</h2>
          <X
            className="cursor-pointer active:translate-y-[1px]"
            onClick={closeModal}
          />
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
              disabled={
                minerals < unit.price || mana < unit.mana || battleLength === 8
              }
            />
          ))
          .slice(1, 5)}
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
