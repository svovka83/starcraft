import React from "react";
import Image from "next/image";
import starcraft from "/images/starcraft/starcraft.png";
import { LeftSide, RightSide, Version } from "../..";

export const StarCraftHeader: React.FC = () => {
  return (
    <header>
      <div className="flex items-center justify-between py-8 px-8">
        <LeftSide />

        <RightSide />
      </div>

      <div className="relative">
        <Image src={starcraft} className=" w-full" alt="starcraft" />
        <Version className="absolute bottom-4 right-8" />
      </div>
    </header>
  );
};
