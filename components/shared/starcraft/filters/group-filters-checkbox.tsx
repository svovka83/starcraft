"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";

interface Props {
  title: string;
  items: FilterCheckboxProps[]; // типізацію беремо з ./filter-checkbox компонента для чекбоксів
  textColor?: string;
  className?: string;
}

export const GroupFiltersCheckbox: React.FC<Props> = ({
  title,
  items,
  textColor,
  className,
}) => {
  return (
    <div>
      <h2 className={cn("border-t text-2xl font-bold mt-4 pt-3", textColor)}>
        {title}
      </h2>

      <div className="flex flex-wrap flex-row justify-center gap-8 mt-4">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            checked={item.checked}
            onCheckedChange={(checked) => console.log(checked)}
            textColor={textColor}
            className={className}
          />
        ))}
      </div>
    </div>
  );
};
