"use client";

import React from "react";
import { useTriggerAnimate } from "@/store/trigger-animations";
import Confetti from "react-confetti";

export const FireworksConfetti = () => {
  const [
    isAnimateCelebratingUpgradeOne,
    isAnimateCelebratingUpgradeTwo,
    isAnimateCelebratingEndGame,
  ] = useTriggerAnimate((state) => [
    state.isAnimateCelebratingUpgradeOne,
    state.isAnimateCelebratingUpgradeTwo,
    state.isAnimateCelebratingEndGame,
  ]);

  return (
    <div className="fixed top-[10vh]">
      {(isAnimateCelebratingUpgradeOne || isAnimateCelebratingEndGame) && (
        <Confetti
          confettiSource={{
            x: 50,
            y: 480,
            w: 0,
            h: 0,
          }}
          numberOfPieces={500}
          gravity={0.05}
          initialVelocityX={{ min: -1, max: 10 }}
          initialVelocityY={{ min: -30, max: 0 }}
          colors={["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff00ff"]}
          recycle={isAnimateCelebratingEndGame}
          className="w-[1180px] h-[90vh]"
        />
      )}
      {(isAnimateCelebratingUpgradeTwo || isAnimateCelebratingEndGame) && (
        <Confetti
          confettiSource={{
            x: 1315,
            y: 480,
            w: 0,
            h: 0,
          }}
          numberOfPieces={500}
          gravity={0.05}
          initialVelocityX={{ min: -10, max: 1 }}
          initialVelocityY={{ min: -30, max: 0 }}
          colors={["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff00ff"]}
          recycle={isAnimateCelebratingEndGame}
          className="w-[1180px] h-[90vh]"
        />
      )}
    </div>
  );
};
