"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Container, ShopModalOne } from ".";

import { Button } from "../ui";
import { useGameStore } from "@/store/game";

interface Props {
  className?: string;
}

export const ShopMainOne: React.FC<Props> = ({ className }) => {
  const [modal, setModal] = React.useState(false);
  const addWorker = useGameStore((state) => state.createWorker);

  const showShopUnits = () => {
    setModal(!modal);
  };

  return (
    <Container className={cn("p-2", className)}>
      <div className="float-left flex flex-col gap-20">
        <Button onClick={showShopUnits}>ShopOne</Button>
        <Button onClick={addWorker} variant="outline" size="sm">
          CreateWorker
        </Button>
      </div>
      <div className="float-right w-[40px] h-[40px] text-center text-[28px] rounded-[50%] text-white bg-green-700">
        life
      </div>
      {modal && <ShopModalOne modal={modal} setModal={setModal} />}
    </Container>
  );
};
