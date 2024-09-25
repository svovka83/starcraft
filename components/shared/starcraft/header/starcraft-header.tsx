import React from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/service/user";
import Image from "next/image";
import starcraft from "/images/starcraft/starcraft.png";
import { LeftSide, RightSide, SearchUnits, Version } from "../..";

export const StarCraftHeader: React.FC = () => {
  // const route = useRouter();

  // auth().then(({ success }) => {
  //   if (!success) {
  //     return route.push("/");
  //   }
  // });
  return (
    <header>
      <div className="flex items-center justify-between py-8 px-8">
        <LeftSide />

        <SearchUnits />

        <RightSide />
      </div>

      <div className="relative">
        <Image src={starcraft} className=" w-full" alt="starcraft" />
        <Version className="absolute bottom-4 right-8" />
      </div>
    </header>
  );
};
