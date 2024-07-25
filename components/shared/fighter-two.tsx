import React from "react";
import { cn } from "@/lib/utils";

import { Container } from ".";

interface Props {
  className?: string;
}

export const FighterTwo: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn("flex items-center justify-center", className)}>
      FighterTwo
    </Container>
  );
};
