"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  sign: "+" | "-" | "";
  value: number;
  effect?: Howl;
  isAnimate: boolean;
  className?: string;
}
export const ChangeValue: React.FC<Props> = ({
  sign,
  value,
  effect,
  isAnimate,
  className,
}) => {
  if (isAnimate && effect) {
    effect.play();
  }

  return (
    <motion.span
      className={cn("text-xl font-bold", className)}
      initial={{ y: 35, opacity: 1 }}
      animate={
        isAnimate
          ? {
              y: -10,
              opacity: 0,
              transition: { duration: 3, ease: "easeOut" },
            }
          : {}
      }
    >
      {isAnimate && sign}
      {isAnimate && value}
    </motion.span>
  );
};
