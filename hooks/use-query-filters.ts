import React from "react";
import { useRouter } from "next/navigation";
import qs from "qs";
import { FiltersProps } from "./use-filters";

export const useQueryFilters = (filters: FiltersProps) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      mana: Array.from(filters.selectedMana),
      health: Array.from(filters.selectedHealth),
      attack: Array.from(filters.selectedAttack),
      ...filters.price,
    };

    const query = qs.stringify(params, { arrayFormat: "comma" });

    if (filters.price.priceFrom === 0 && filters.price.priceTo === 15) {
      router.push(
        `/starcraft?${query.split("priceFrom=0&priceTo=15").join("")}`,
        { scroll: false }
      );
      return;
    }

    router.push(`/starcraft?${query}`, { scroll: false });
  }, [
    filters.selectedMana,
    filters.selectedHealth,
    filters.selectedAttack,
    filters.price,
  ]);
};
