"use client";
// not finished - when unit come back return new image - need old image
import React from "react";
import { motion } from "framer-motion";
import { useTriggerAnimate } from "@/store/trigger-animations";

interface Props {
  reverse: boolean;
  children: React.ReactNode;
}

export const MoveUnitUp: React.FC<React.PropsWithChildren<Props>> = ({
  reverse,
  children,
}) => {
  const isAnimateMoveUnitUpOne = useTriggerAnimate(
    (state) => state.isAnimateMoveUnitUpOne
  );
  const isAnimateMoveUnitUpTwo = useTriggerAnimate(
    (state) => state.isAnimateMoveUnitUpTwo
  );
  const isAnimateMoveUnitUpOneComeback = useTriggerAnimate(
    (state) => state.isAnimateMoveUnitUpOneComeback
  );
  const isAnimateMoveUnitUpTwoComeback = useTriggerAnimate(
    (state) => state.isAnimateMoveUnitUpTwoComeback
  );

  return (
    <>
      {!reverse && (
        <motion.span
          initial={
            reverse
              ? { x: 110, y: 90, opacity: 0 }
              : { x: -110, y: 90, opacity: 0 }
          }
          animate={
            isAnimateMoveUnitUpOneComeback ? { x: 0, y: 0, opacity: 1 } : {}
          }
          transition={{ duration: 1 }}
          key={isAnimateMoveUnitUpOne}
        >
          {children}
        </motion.span>
      )}
      {reverse && (
        <motion.span
          initial={
            reverse
              ? { x: 110, y: 90, opacity: 0 }
              : { x: -110, y: 90, opacity: 0 }
          }
          animate={
            isAnimateMoveUnitUpTwoComeback ? { x: 0, y: 0, opacity: 1 } : {}
          }
          transition={{ duration: 1 }}
          key={isAnimateMoveUnitUpTwo}
        >
          {children}
        </motion.span>
      )}
    </>
  );
};
