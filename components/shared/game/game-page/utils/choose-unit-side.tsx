import React from "react";
import { Button } from "../../../../ui";
import { MoveDown, MoveUp } from "lucide-react";

interface Props {
  activeUnit: number;
  moveUnitUp: VoidFunction;
  moveUnitDown: VoidFunction;
  mana: number;
}

export const ChooseUnitSide: React.FC<Props> = ({
  activeUnit,
  moveUnitUp,
  moveUnitDown,
  mana,
}) => {
  return (
    <div className="flex flex-col justify-around">
      <Button disabled={!activeUnit || mana === 0} onClick={moveUnitUp}>
        <MoveUp />
      </Button>
      <Button disabled={!activeUnit || mana === 0} onClick={moveUnitDown}>
        <MoveDown />
      </Button>
    </div>
  );
};
