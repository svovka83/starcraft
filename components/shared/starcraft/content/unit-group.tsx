import React from "react";
import { UnitList } from "../..";
import { unitsGroupDTO } from "@/service/dto/starcraft.dto";

interface Props {
  unitsGroup: unitsGroupDTO[];
  revers?: boolean;
}

export const UnitGroup: React.FC<Props> = ({ unitsGroup, revers }) => {
  return (
    <div className="grid grid-rows-3 rows-span-3 mb-12">
      {unitsGroup.map(
        (group) =>
          group.units.length > 0 && (
            <UnitList
              key={group.id}
              raceName={group.name}
              raceList={group.units}
              revers={revers}
            />
          )
      )}
    </div>
  );
};
