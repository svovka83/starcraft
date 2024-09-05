"use client";

import React from "react";
import { Container, SoundGame, StartTurn } from "..";
import { Button } from "@/components/ui";
import { useGameStore } from "@/store/game";
import { motion } from "framer-motion";

export const Staff: React.FC = () => {
  const [turn, message, manaOne, manaTwo, endTurn, logicAI, gameMode] =
    useGameStore((state) => [
      state.turn,
      state.message,
      state.one.mana,
      state.two.mana,
      state.endTurn,
      state.logicAI,
      state.gameMode,
    ]);

  if (!turn && gameMode === "COMPUTER") {
    setTimeout(() => {
      logicAI();
    }, 3000);
  }

  return (
    <Container className={"relative"}>
      <StartTurn />
      {(manaOne === 0 || manaTwo === 0) && (
        <Button
          className={"absolute right-0 left-0 mx-14 text-xl font-bold z-50"}
          onClick={endTurn}
        >
          end turn
        </Button>
      )}
      {gameMode === "PLAYER" && (
        <div className="absolute bottom-10 mx-20 text-3xl text-blue-700 font-bold">
          {turn ? "Player 1" : "Player 2"}
        </div>
      )}
      {gameMode === "COMPUTER" && (
        <div className="absolute bottom-10 mx-20 text-3xl text-blue-700 font-bold">
          {turn ? "Player" : "Computer"}
        </div>
      )}

      <motion.div
        className="absolute bottom-0 mx-4 text-3xl text-blue-700 font-bold"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        key={message}
      >
        {message}
      </motion.div>

      {/* <SoundGame /> */}
    </Container>
  );
};
