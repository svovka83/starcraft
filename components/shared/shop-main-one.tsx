"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Container, ShopModalOne } from ".";

interface Props {
  className?: string;
}

export const ShopMainOne: React.FC<Props> = ({ className }) => {
  const [modal, setModal] = React.useState(false);

  const showShopUnits = () => {
    setModal(!modal);
  };

  return (
    <Container className={cn("p-2", className)}>
      <div className="float-left flex flex-col gap-20">
        <button onClick={showShopUnits}>ShopOne</button>
        <button>AddWorker</button>
      </div>
      <div className="float-right w-[40px] h-[40px] text-center text-[28px] rounded-[50%] text-white bg-green-700">
        life
      </div>
      {modal && <ShopModalOne />}
    </Container>
  );
};
