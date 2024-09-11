"use client";

import React from "react";
import {
  Container,
  EndTurnButton,
  NamePlayerOnBoard,
  SoundGame,
  StartGame,
} from "..";
import { useGameStore } from "@/store/game";
import { motion } from "framer-motion";

export const Staff: React.FC = () => {
  const [turn, message, logicAI, gameMode] = useGameStore((state) => [
    state.turn,
    state.message,
    state.logicAI,
    state.gameMode,
  ]);

  if (!turn && gameMode === "COMPUTER") {
    setTimeout(() => {
      logicAI();
    }, 5000);
  }

  return (
    <Container className={"relative"}>
      <StartGame />

      <EndTurnButton turn={turn} gameMode={gameMode} />

      <NamePlayerOnBoard turn={turn} gameMode={gameMode} />

      <motion.div
        className="absolute bottom-2 mx-4 text-2xl text-white font-bold"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        key={message}
      >
        {message}
      </motion.div>

      <SoundGame />
    </Container>
  );
};
