import React from "react";
import { cn } from "@/lib/utils";
import { Container } from ".";

interface Props {
  className?: string;
}

export const Staff: React.FC<Props> = ({ className }) => {
  return (
    <Container
      className={cn(
        "flex items-center justify-center text-[32px] text-fuchsia-500 font-bold",
        className
      )}
    >
      StarCraft
    </Container>
  );
};
