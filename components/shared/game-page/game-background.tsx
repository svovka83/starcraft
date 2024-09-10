import React from "react";
import Image from "next/image";
import background from "/images/utils/game_background.jpg";

export const GameBackground: React.FC = () => {
  return (
    <div>
      <Image
        src={background}
        className="fixed w-[1180px] h-[100vh] top-[10vh] bottom-0 -z-30"
        alt="background"
      />
    </div>
  );
};
