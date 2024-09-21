import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

interface Props {
  currentMana: number;
  openUpdateBase?: VoidFunction;
  className?: string;
}

export const UpgradeBaseButton: React.FC<Props> = ({
  currentMana,
  openUpdateBase,
  className,
}) => {
  return (
    <span
      className={cn(
        "absolute bottom-0 px-4 py-1 bg-violet-700 text-white rounded-sm cursor-pointer group",
        className
      )}
      onClick={openUpdateBase}
    >
      <span
        className={
          "translate-y-0 group-hover:invisible group-hover:translate-y-[-20px] group-hover:opacity-0 duration-200"
        }
      >
        Level{" "}
        {(currentMana === 3 && "1") ||
          (currentMana === 4 && "2") ||
          (currentMana === 5 && "3") ||
          (currentMana === 6 && "4")}
      </span>
      <span
        className={
          "absolute left-1 invisible translate-y-[10px] opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 duration-200"
        }
      >
        {currentMana === 6 ? (
          "Max Level"
        ) : (
          <div className="flex items-center">
            upgrade
            <ArrowUp size={18} />
          </div>
        )}
      </span>
    </span>
  );
};
