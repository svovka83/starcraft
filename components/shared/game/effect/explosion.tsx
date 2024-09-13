"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  isAnimate: boolean;
  effect?: Howl;
  className?: string;
}

export const Explosion: React.FC<Props> = ({
  isAnimate,
  effect,
  className,
}) => {
  if (isAnimate && effect) {
    effect.play();
  }

  return (
    <div className={cn("absolute flex z-10", className)}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isAnimate ? { scale: 5, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "circInOut" }}
      >
        {isAnimate && "💥"}
      </motion.div>
    </div>
  );
};
