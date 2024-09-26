import React from "react";
import { Filters, UnitList } from "../..";
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
    <div className="flex gap-8">
      <Filters quantity={quantity} />

      <div className="mb-12">
        {unitsGroup.map(
          (group) =>
            group.units.length > 0 && (
              <UnitList
                key={group.id}
                raceName={group.name}
                raceList={group.units}
              />
            )
        )}
      </div>
    </div>
  );
};
