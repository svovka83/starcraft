"use client";

import React from "react";
import { Filters, UnitGroup } from "../..";
import { useStarcraftStore } from "@/store/starcraft";

export const ContentUnits: React.FC = () => {
  const unitsGroup = useStarcraftStore().unitsGroup;
  const setUnitsGroup = useStarcraftStore().setUnitsGroup;

  React.useEffect(() => {
    setUnitsGroup();
  }, []);

  return (
    <div className="flex justify-around text-center">
      <UnitGroup unitsGroup={unitsGroup} revers={false} />
      <Filters />
      <UnitGroup unitsGroup={unitsGroup} revers={true} />
    </div>
  );
};
