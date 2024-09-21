import React from "react";
import { ChangeValue } from "../..";
import { coin_drop } from "@/constants";

interface Props {
  currentMinerals: number;
  workersQuantity: number;
  unitPrice: number;
  isAnimateMineral: boolean;
  isAnimateBuyWorker: boolean;
  isAnimateBuyUnit: boolean;
}

export const MineralsCounter: React.FC<Props> = ({
  currentMinerals,
  workersQuantity,
  unitPrice,
  isAnimateMineral,
  isAnimateBuyWorker,
  isAnimateBuyUnit,
}) => {
  return (
    <div className="relative mr-6 pointer-events-none">
      <span>Minerals: {currentMinerals}</span>
      <ChangeValue
        sign="+"
        value={workersQuantity}
        effect={coin_drop}
        isAnimate={isAnimateMineral}
        className="absolute -top-2 right-2 text-blue-700"
      />
      <ChangeValue
        sign="-"
        value={1}
        effect={coin_drop}
        isAnimate={isAnimateBuyWorker}
        className="absolute -top-2 right-2 text-red-500"
      />
      <ChangeValue
        sign="-"
        value={unitPrice}
        effect={coin_drop}
        isAnimate={isAnimateBuyUnit}
        className="absolute -top-2 right-2 text-red-500"
      />
    </div>
  );
};
