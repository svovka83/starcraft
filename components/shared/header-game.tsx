import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const HeaderGame: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        "border flex items-center justify-between py-4 text-[24px] font-bold h-[10vh]",
        className
      )}
    >
      <h2>Minerals: 10</h2>
      <h2>turn</h2>
      <h2>Minerals: 10</h2>
    </header>
  );
};
