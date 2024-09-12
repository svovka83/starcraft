"use client";

import React from "react";
import { Button } from "@/components/ui";
import { AudioLines, OctagonPause } from "lucide-react";
import { starcraft_fon_1, starcraft_fon_2 } from "@/constants";

export const SoundGame: React.FC = () => {
  const [isPlayingOne, setIsPlayingOne] = React.useState(false);
  const [isPlayingTwo, setIsPlayingTwo] = React.useState(false);

  const playSoundOne = () => {
    if (isPlayingOne) {
      starcraft_fon_1.pause();
      setIsPlayingOne(false);
    } else {
      starcraft_fon_2.pause();
      setIsPlayingTwo(false);
      starcraft_fon_1.play();
      setIsPlayingOne(true);
    }
  };
  const playSoundTwo = () => {
    if (isPlayingTwo) {
      starcraft_fon_2.pause();
      setIsPlayingTwo(false);
    } else {
      starcraft_fon_1.pause();
      setIsPlayingOne(false);
      starcraft_fon_2.play();
      setIsPlayingTwo(true);
    }
  };

  return (
    <>
      <Button
        className="absolute bg-indigo-500 hover:bg-indigo-700 bottom-40 right-4 text-white z-50"
        onClick={playSoundOne}
      >
        {isPlayingOne ? <AudioLines /> : <OctagonPause />}
      </Button>
      <Button
        className="absolute bg-violet-500 hover:bg-violet-700 bottom-28 right-4 text-white z-50"
        onClick={playSoundTwo}
      >
        {isPlayingTwo ? <AudioLines /> : <OctagonPause />}
      </Button>
    </>
  );
};
