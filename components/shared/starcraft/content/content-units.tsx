import React from "react";
import { Filters, UnitGroup } from "../..";
import { unitsGroupDTO } from "@/service/dto/starcraft.dto";

interface Props {
  unitsGroup: unitsGroupDTO[];
}

export const ContentUnits: React.FC<Props> = ({ unitsGroup }) => {
  const quantity =
    unitsGroup[0].units.length +
    unitsGroup[1].units.length +
    unitsGroup[2].units.length;

  return (
    <div className="flex justify-around text-center">
      <UnitGroup unitsGroup={unitsGroup} revers={false} />
      <Filters quantity={quantity} />
      <UnitGroup unitsGroup={unitsGroup} revers={true} />
    </div>
  );
};
