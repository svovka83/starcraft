"use client";

import React from "react";
import { motion } from "framer-motion";

export const StartTurn: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [value, setValue] = React.useState("");

  const text = ["3", "2", "1", "Ready!"];

  const variants = {
    initial: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 0.3,
      scale: 5,
      transition: { duration: 1 },
    },
  };

  React.useEffect(() => {
    setTimeout(() => {
      setValue(text[index]);
      setIndex(index + 1);
    }, 1000);
  }, [index]);

  return (
    <div className="text-center">
      <motion.span
        initial={"initial"}
        animate={"animate"}
        variants={variants}
        className="absolute text-3xl font-bold text-blue-700"
        key={index}
      >
        {value}
      </motion.span>
    </div>
  );
};
