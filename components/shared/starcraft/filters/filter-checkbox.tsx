import React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  selected?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  textColor?: string;
  className?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  selected,
  onCheckedChange,
  textColor,
  className,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label
        htmlFor={`checkbox-${String(value)}`}
        className={cn("leading-none cursor-pointer font-bold", textColor)}
      >
        {text}
      </label>
      <Checkbox
        id={`checkbox-${String(value)}`}
        value={value}
        checked={selected}
        onCheckedChange={onCheckedChange}
        className={cn("rounded-[8px] w-6 h-6", className)}
      />
    </div>
  );
};
