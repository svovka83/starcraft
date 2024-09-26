"use client";

import React from "react";
import { useIntersection } from "react-use";
import { Title, UnitCart } from "../..";
import { useStarcraftStore } from "@/store/starcraft";
import { Unit } from "@prisma/client";

interface Props {
  raceName: string;
  raceList: Unit[];
}

export const UnitList: React.FC<Props> = ({ raceName, raceList }) => {
  const intersectionRef = React.useRef<HTMLInputElement>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const setActiveId = useStarcraftStore((state) => state.setActiveId);

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(raceName);
    }
  }, [intersection?.isIntersecting, raceName]);

  return (
    <div className="mt-12" id={raceName} ref={intersectionRef}>
      <Title text={raceName} size="lg" />

      <div className="flex flex-wrap gap-4">
        {raceList.map((unit) => (
          <UnitCart
            key={unit.id}
            name={unit.name}
            image={unit.image}
            mana={unit.mana}
            health={unit.health}
            attack={unit.attack}
            price={unit.price}
          />
        ))}
      </div>
    </div>
  );
};
