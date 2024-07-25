import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Staff: React.FC<Props> = ({ className }) => {
  return <div className={cn("flex items-center justify-center w-[20%]", className)}>Staff</div>;
};