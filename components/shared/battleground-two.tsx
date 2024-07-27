import React from "react";
import { cn } from "@/lib/utils";

import { Container } from ".";

interface Props {
  className?: string;
}

export const BattlegroundTwo: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn("flex items-center justify-center", className)}>
      BattlegroundTwo
    </Container>
  );
};
