"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  value: number;
  key: number;
  className?: string;
}
export const ChangeBossLife: React.FC<Props> = ({
  value,
  key,
  className,
}) => {
  return (
    <motion.span
      className={cn("text-xl text-red-500 font-bold", className)}
      initial={{ y: 35, opacity: 1 }}
      animate={{
        y: -10,
        opacity: 0,
        transition: { duration: 3, ease: "easeOut" },
      }}
      key={key}
    >
      -{value}
    </motion.span>
  );
};
