import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Version: React.FC<Props> = ({ className }) => {
  return <span className={cn("text-white", className)}>version: 1.1.0</span>;
};
