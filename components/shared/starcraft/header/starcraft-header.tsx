import React from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/service/user";
import { LeftSide, RightSide, SearchUnits, Version } from "../..";

export const StarCraftHeader: React.FC = () => {
  // const route = useRouter();

  // auth().then(({ success }) => {
  //   if (!success) {
  //     return route.push("/");
  //   }
  // });
  return (
    <header className="flex items-center justify-between py-8 px-8">
      <LeftSide />

      <SearchUnits />

      <RightSide />
    </header>
  );
};
