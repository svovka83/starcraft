import React from "react";
import { Filters, UnitGroup } from "../..";
import { unitsGroupDTO } from "@/service/dto/starcraft.dto";

interface Props {
  unitsGroup: unitsGroupDTO[];
}

export const ContentUnits: React.FC<Props> = ({ unitsGroup }) => {
  return (
    <div className="flex justify-around text-center">
      <UnitGroup unitsGroup={unitsGroup} revers={false} />
      <Filters />
      <UnitGroup unitsGroup={unitsGroup} revers={true} />
    </div>
  );
};
