import React from "react";
import { GroupFiltersCheckbox, RangeSlider } from "../..";
import { Input } from "@/components/ui";
import { MANA, HEALTH, ATTACK } from "@/constants";

export const Filters: React.FC = () => {
  return (
    <div className="sticky top-[60px] w-[36%] h-[565px] border-x-2">
      <h1 className="text-3xl font-bold mt-8 text-violet-700">parameters</h1>

      <GroupFiltersCheckbox
        title="mana"
        textColor="text-blue-700"
        items={MANA}
        className="border-blue-700 data-[state=checked]:bg-blue-700"
      />
      <GroupFiltersCheckbox
        title="health"
        textColor="text-green-700"
        items={HEALTH}
        className="border-green-700 data-[state=checked]:bg-green-700"
      />
      <GroupFiltersCheckbox
        title="attack"
        textColor="text-red-600"
        items={ATTACK}
        className="border-red-600 data-[state=checked]:bg-red-600"
      />

      <div className="mt-5 border-y pb-7">
        <h2 className="text-2xl font-bold pt-3 text-violet-700">price</h2>
        <div className="flex justify-center gap-8 mx-8 mb-7">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={9}
            className="w-20"
            // value={String(filters.prices.priceFrom)}
            // onChange={(event) =>
            //   filters.setPrices("priceFrom", Number(event.target.value))
            // }
          />
          <Input
            type="number"
            placeholder="9"
            min={0}
            max={9}
            className="w-20"
            // value={String(filters.prices.priceTo)}
            // onChange={(event) =>
            //   filters.setPrices("priceTo", Number(event.target.value))
            // }
          />
        </div>

        <RangeSlider
          min={0}
          max={9}
          step={1}
          // value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          // onValueChange={updatePrices}
        />
      </div>
    </div>
  );
};
