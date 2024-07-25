import React from "react";
import { cn } from "@/lib/utils";

import { MineralsOne, MineralsTwo, Staff } from ".";

interface Props {
  className?: string;
}

export const MineralsLine: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex h-[28vh] border", className)}>
      <MineralsOne />
      <Staff />
      <MineralsTwo />
    </div>
  );
};
