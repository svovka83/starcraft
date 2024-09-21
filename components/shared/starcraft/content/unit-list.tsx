import React from "react";
import { useIntersection } from "react-use";
import { Title, UnitCart } from "../..";
import { useStarcraftStore } from "@/store/starcraft";
import { Unit } from "@prisma/client";

interface Props {
  raceName: string;
  raceList: Unit[];
  revers?: boolean;
}

export const UnitList: React.FC<Props> = ({ raceName, raceList, revers }) => {
  const setActiveId = useStarcraftStore((state) => state.setActiveId);

  const intersectionRef = React.useRef<HTMLDivElement>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(raceName);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className="mt-12" id={raceName} ref={intersectionRef}>
      <Title text={raceName} size="lg" />

      {raceList
        .map((unit, index) => (
          <UnitCart
            key={index}
            name={unit.name}
            image={unit.image}
            mana={unit.mana}
            health={unit.health}
            attack={unit.attack}
            price={unit.price}
            revers={revers}
          />
        ))
        .filter((_, index) => {
          if (!revers) {
            return index % 2 === 0;
          } else {
            return index % 2 !== 0;
          }
        })}
    </div>
  );
};
