import React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  textColor?: string;
  className?: string;
  name?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  checked,
  onCheckedChange,
  textColor,
  className,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className={cn("leading-none cursor-pointer font-bold", textColor)}
      >
        {text}
      </label>
      <Checkbox
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={cn("rounded-[8px] w-6 h-6", className)}
        id={`checkbox-${String(name)}-${String(value)}`}
      />
    </div>
  );
};
