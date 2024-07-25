import React from "react";
import { cn } from "@/lib/utils";

import { Container } from ".";

interface Props {
  className?: string;
}

export const ShopMainOne: React.FC<Props> = ({ className }) => {
  return (
      <Container  className={cn("p-2", className)}>
        <div className="float-left flex flex-col gap-20">
          <button>ShopOne</button>
          <button>AddWorker</button>
        </div>
        <div className="float-right w-[40px] h-[40px] text-center text-[28px] rounded-[50%] text-white bg-green-700">
          life
        </div>
      </Container>
  );
};
