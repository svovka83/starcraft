"use client";

import React from "react";
import { GroupFiltersCheckbox, RangeSlider } from "../..";
import { Input } from "@/components/ui";
import { MANA, HEALTH, ATTACK } from "@/constants";
import { useFilters } from "@/hooks/use-filters";
import { useQueryFilters } from "@/hooks/use-query-filters";

interface Props {
  quantity: number;
}

export const Filters: React.FC<Props> = ({ quantity }) => {
  const filters = useFilters();

  useQueryFilters(filters);

  return (
    <div className="sticky top-[56px] w-[256px] h-[597px] text-center border-x-2">
      <div className="flex gap-2 pl-2 text-3xl font-bold mt-6 mb-4 text-violet-700 pointer-events-none">
        <h1>
          units quantity
        </h1>
        <span>{quantity}</span>
      </div>

      <GroupFiltersCheckbox
        title="mana"
        items={MANA}
        selected={filters.selectedMana}
        onClickCheckbox={(mana) => filters.setToggleMana(mana)}
        textColor="text-blue-700"
        className="border-blue-700 data-[state=checked]:bg-blue-700"
      />
      <GroupFiltersCheckbox
        title="health"
        items={HEALTH}
        selected={filters.selectedHealth}
        onClickCheckbox={(health) => filters.setToggleHealth(health)}
        textColor="text-green-700"
        className="border-green-700 data-[state=checked]:bg-green-700"
      />
      <GroupFiltersCheckbox
        title="attack"
        items={ATTACK}
        selected={filters.selectedAttack}
        onClickCheckbox={(attack) => filters.setToggleAttack(attack)}
        textColor="text-red-600"
        className="border-red-600 data-[state=checked]:bg-red-600"
      />

      <div className="mt-2 border-y pb-7">
        <h2 className="text-2xl font-bold pt-1 text-violet-700 pointer-events-none">price</h2>
        <div className="flex justify-center gap-8 mx-8 mb-7">
          <Input
            type="number"
            min={0}
            max={filters.price.priceTo}
            className="w-20"
            value={String(filters.price.priceFrom)}
            onChange={(event) =>
              filters.updatePrice("priceFrom", Number(event.target.value))
            }
          />
          <Input
            type="number"
            min={filters.price.priceFrom}
            max={15}
            className="w-20"
            value={String(filters.price.priceTo)}
            onChange={(event) =>
              filters.updatePrice("priceTo", Number(event.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={15}
          step={1}
          value={[filters.price.priceFrom || 0, filters.price.priceTo || 15]}
          onValueChange={([priceFrom, priceTo]) =>
            filters.setPrice({ priceFrom, priceTo })
          }
        />
      </div>
    </div>
  );
};
