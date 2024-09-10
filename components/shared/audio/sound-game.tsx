"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui";
import { AudioLines, OctagonPause } from "lucide-react";

export const SoundGame: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playSound = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <Button
      className="absolute bottom-28 right-4 text-white z-50"
      onClick={playSound}
    >
      <audio ref={audioRef} loop>
        <source src="sounds/future-mask-off.mp3" type="audio/mp3" />
      </audio>
      {isPlaying ? <AudioLines /> : <OctagonPause />}
    </Button>
  );
};
