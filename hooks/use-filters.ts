import React from "react";
import { useSet } from "react-use";
import { useSearchParams } from "next/navigation";

export interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export interface FiltersProps {
  selectedMana: Set<string>;
  selectedHealth: Set<string>;
  selectedAttack: Set<string>;
  price: PriceProps;
  setToggleMana: (mana: string) => void;
  setToggleHealth: (health: string) => void;
  setToggleAttack: (attack: string) => void;
  setPrice: (price: PriceProps) => void;
}

export const useFilters = () => {
  const searchParams = useSearchParams();

  const [selectedMana, { toggle: setToggleMana }] = useSet<string>(
    new Set(
      searchParams.has("mana") ? searchParams.get("mana")?.split(",") : []
    )
  );
  const [selectedHealth, { toggle: setToggleHealth }] = useSet<string>(
    new Set(
      searchParams.has("health") ? searchParams.get("health")?.split(",") : []
    )
  );
  const [selectedAttack, { toggle: setToggleAttack }] = useSet<string>(
    new Set(
      searchParams.has("attack") ? searchParams.get("attack")?.split(",") : []
    )
  );
  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: searchParams.has("priceFrom")
      ? Number(searchParams.get("priceFrom")?.split(","))
      : 0,
    priceTo: searchParams.has("priceTo")
      ? Number(searchParams.get("priceTo")?.split(","))
      : 15,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ ...price, [name]: value });
  };

  return {
    selectedMana,
    selectedHealth,
    selectedAttack,
    price,
    updatePrice,
    setPrice,
    setToggleMana,
    setToggleHealth,
    setToggleAttack,
  };
};
