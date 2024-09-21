"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { users } from "@/service/user";

interface Props {
  className?: string;
}

export const Version: React.FC<Props> = ({ className }) => {
  const [usersQuantity, setUsersQuantity] = React.useState<number>(0);

  React.useEffect(() => {
    users().then((data) => {
      setUsersQuantity(data);
    });
  }, []);

  return (
    <span className={cn("text-white", className)}>
      version: 2.0.{usersQuantity}
    </span>
  );
};
