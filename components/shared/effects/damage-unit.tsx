import React from "react";
import { ChangeValue, Explosion } from "..";

interface Props {
  turn: boolean;
  attackOne: number;
  attackTwo: number;
  isAnimateDamage: boolean;
  reverse: boolean;
}

export const DamageUnit: React.FC<Props> = ({
  turn,
  attackOne,
  attackTwo,
  isAnimateDamage,
  reverse,
}) => {
  return (
    <>
      {turn && reverse && (
        <>
          <ChangeValue
            sign={attackTwo ? "-" : ""}
            value={attackTwo ? attackOne : attackTwo}
            isAnimate={isAnimateDamage}
            className="absolute right-20 top-0 text-red-500"
          />
          <Explosion isExploding={isAnimateDamage} />
        </>
      )}
      {!turn && !reverse && (
        <>
          <ChangeValue
            sign={attackOne ? "-" : ""}
            value={attackOne ? attackTwo : attackOne}
            isAnimate={isAnimateDamage}
            className="absolute left-20 top-0 text-red-500"
          />
          <Explosion isExploding={isAnimateDamage} />
        </>
      )}
    </>
  );
};
