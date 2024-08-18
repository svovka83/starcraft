import React from "react";
import { Button } from "../ui";
import { MoveDown, MoveUp } from "lucide-react";

interface Props {
  activeUnit: number;
  moveUnitToFight: VoidFunction;
  className?: string;
}

export const ChooseUnitSide: React.FC<Props> = ({
  activeUnit,
  moveUnitToFight,
}) => {
  return (
    <div className="flex flex-col justify-around">
      <Button disabled={!activeUnit} onClick={moveUnitToFight}>
        <MoveUp />
      </Button>
      <Button disabled={!activeUnit}>
        <MoveDown />
      </Button>
    </div>
  );
};
