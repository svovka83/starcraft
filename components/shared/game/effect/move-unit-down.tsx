"use client";
// not finished - when unit come back return new image - need old image
import React from "react";
import { motion } from "framer-motion";
import { useTriggerAnimate } from "@/store/trigger-animations";

interface Props {
  reverse: boolean;
  children: React.ReactNode;
}

export const MoveUnitDown: React.FC<React.PropsWithChildren<Props>> = ({
  reverse,
  children,
}) => {
  const isAnimateMoveUnitDownOne = useTriggerAnimate(
    (state) => state.isAnimateMoveUnitDownOne
  );
  const isAnimateMoveUnitDownTwo = useTriggerAnimate(
    (state) => state.isAnimateMoveUnitDownTwo
  );
  const isAnimateMoveUnitDownOneComeback = useTriggerAnimate(
    (state) => state.isAnimateMoveUnitDownOneComeback
  );
  const isAnimateMoveUnitDownTwoComeback = useTriggerAnimate(
    (state) => state.isAnimateMoveUnitDownTwoComeback
  );

  return (
    <>
      {!reverse && (
        <motion.span
          initial={
            reverse
              ? { x: 110, y: -90, opacity: 0 }
              : { x: -110, y: -90, opacity: 0 }
          }
          animate={
            isAnimateMoveUnitDownOneComeback ? { x: 0, y: 0, opacity: 1 } : {}
          }
          transition={{ duration: 1 }}
          key={isAnimateMoveUnitDownOne}
        >
          {children}
        </motion.span>
      )}
      {reverse && (
        <motion.span
          initial={
            reverse
              ? { x: 110, y: -90, opacity: 0 }
              : { x: -110, y: -90, opacity: 0 }
          }
          animate={
            isAnimateMoveUnitDownTwoComeback ? { x: 0, y: 0, opacity: 1 } : {}
          }
          transition={{ duration: 1 }}
          key={isAnimateMoveUnitDownTwo}
        >
          {children}
        </motion.span>
      )}
    </>
  );
};
