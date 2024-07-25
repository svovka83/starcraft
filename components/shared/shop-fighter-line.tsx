import React from "react";
import { cn } from "@/lib/utils";

import {
  ShopMainOne,
  FighterOne,
  FighterTwo,
  ShopMainTwo,
} from "@/components/shared";

interface Props {
  className?: string;
}

export const ShopFighterLine: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex h-[26vh] border", className)}>
      <ShopMainOne />
      <FighterOne />
      <FighterTwo />
      <ShopMainTwo />
    </div>
  );
};
