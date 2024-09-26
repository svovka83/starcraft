"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";

interface Props {
  className?: string;
}

export const Version: React.FC<Props> = ({ className }) => {
  const usersQuantity = useUserStore().quantity;
  const setUsersQuantity = useUserStore().setUsersQuantity;

  React.useEffect(() => {
    setUsersQuantity();
  }, []);

  return (
    <span className={cn("text-white pointer-events-none", className)}>
      version: 2.2.{usersQuantity}
    </span>
  );
};
