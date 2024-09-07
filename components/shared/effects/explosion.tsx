"use client";

import { motion } from "framer-motion";

interface Props {
  isExploding: boolean;
}

export const Explosion: React.FC<Props> = ({ isExploding }) => {
  return (
    <div className="absolute flex z-10">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isExploding ? { scale: 5, opacity: 1 } : {}}
        transition={{ duration: 3, ease: "circInOut" }}
      >
        💥
      </motion.div>
    </div>
  );
};
