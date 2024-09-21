import React from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@/components/ui";
import { useGameStore } from "@/store/game";
import { button_click } from "@/constants";

interface Props {
  currentMana: number;
  openUpdateBase: boolean;
  setOpenUpdateBase: (openUpdateBase: boolean) => void;
}

export const WindowUpgradeBase: React.FC<Props> = ({
  currentMana,
  openUpdateBase,
  setOpenUpdateBase,
}) => {
  const upgradeBaseLevelTwo = useGameStore().upgradeBaseLevelTwo;
  const upgradeBaseLevelThree = useGameStore().upgradeBaseLevelThree;
  const upgradeBaseLevelFour = useGameStore().upgradeBaseLevelFour;

  const upgradeBase = () => {
    if (currentMana === 3) {
      upgradeBaseLevelTwo();
    }
    if (currentMana === 4) {
      upgradeBaseLevelThree();
    }
    if (currentMana === 5) {
      upgradeBaseLevelFour();
    }
    setOpenUpdateBase(false);
  };

  const closedUpgradeBase = () => {
    button_click.play();
    setOpenUpdateBase(false);
  };

  return (
    <Dialog open={openUpdateBase}>
      <DialogContent className="w-[340px] rounded-md bg-black">
        <DialogTitle className="text-center text-2xl font-bold text-white pointer-events-none">
          Would you like to update your base?
        </DialogTitle>
        <ul className="text-xl font-bold text-center pointer-events-none">
          <li className="text-green-600">Max mana: +1</li>
          <li className="text-green-600">New units will be available</li>
          <li className="text-red-600">Mana: -{currentMana}</li>
          <li className="text-red-600">
            Price:{" "}
            {(currentMana === 3 && "15") ||
              (currentMana === 4 && "20") ||
              (currentMana === 5 && "25")}
          </li>
        </ul>
        <div className="flex justify-around gap-2">
          <Button variant="success" className="w-24" onClick={upgradeBase}>
            Yes
          </Button>
          <Button
            variant="destructive"
            className="w-24"
            onClick={closedUpgradeBase}
          >
            No
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
