import React from "react";
import { cn } from "@/lib/utils";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";

interface Props {
  title: string;
  items: FilterCheckboxProps[];
  selected: Set<string>;
  onClickCheckbox: (value: string) => void;
  textColor?: string;
  className?: string;
}

export const GroupFiltersCheckbox: React.FC<Props> = ({
  title,
  items,
  selected,
  onClickCheckbox,
  textColor,
  className,
}) => {
  return (
    <div>
      <h2 className={cn("border-t text-2xl font-bold mt-4 pt-3", textColor)}>
        {title}
      </h2>

      <div className="flex flex-wrap flex-row justify-center gap-4 mt-4">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            selected={selected.has(item.value)}
            onCheckedChange={() => onClickCheckbox(item.value)}
            textColor={textColor}
            className={className}
          />
        ))}
      </div>
    </div>
  );
};
