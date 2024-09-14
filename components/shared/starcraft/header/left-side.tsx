import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/images/starcraft/mouthership.jpg";

export const LeftSide: React.FC = () => {
  return (
    <Link href="/starcraft">
      <div className="flex items-center gap-4">
        <Image src={logo} className="w-[60px]" alt="logo" />
        <div>
          <h1 className="text-3xl uppercase font-black text-violet-700">
            StarCraft
          </h1>
          <p className="text-[17px] text-orange-500 leading-3">
            the most strategic game
          </p>
        </div>
      </div>
    </Link>
  );
};
