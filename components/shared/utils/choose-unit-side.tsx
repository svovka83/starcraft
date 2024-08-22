import React from "react";
import { Button } from "../../ui";
import { MoveDown, MoveUp } from "lucide-react";

interface Props {
  activeUnit: number;
  moveUnitUp: VoidFunction;
  moveUnitDown: VoidFunction;
}

export const ChooseUnitSide: React.FC<Props> = ({
  activeUnit,
  moveUnitUp,
  moveUnitDown,
}) => {
  return (
    <div className="flex flex-col justify-around">
      <Button disabled={!activeUnit} onClick={moveUnitUp}>
        <MoveUp />
      </Button>
      <Button disabled={!activeUnit} onClick={moveUnitDown}>
        <MoveDown />
      </Button>
    </div>
  );
};
