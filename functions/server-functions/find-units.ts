import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  orderBy?: string;
  mana?: string;
  health?: string;
  attack?: string;
  priceFrom?: number;
  priceTo?: number;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 15;

export const findUnits = async (params: GetSearchParams) => {
  const manaFilter = params.mana?.replace(/mana_/g, "").split(",").map(Number);
  const healthFilter = params.health
    ?.replace(/health_/g, "")
    .split(",")
    .map(Number);
  const attackFilter = params.attack
    ?.replace(/attack_/g, "")
    .split(",")
    .map(Number);

  const minPrice = Number(params.priceFrom || DEFAULT_MIN_PRICE);
  const maxPrice = Number(params.priceTo || DEFAULT_MAX_PRICE);

  const units = await prisma.category.findMany({
    include: {
      units: {
        where: {
          mana: manaFilter ? { in: manaFilter } : undefined,
          health: healthFilter ? { in: healthFilter } : undefined,
          attack: attackFilter ? { in: attackFilter } : undefined,
          price: {
            gte: minPrice,
            lte: maxPrice,
          },
        },
        orderBy: {
          price: "asc",
        },
      },
    },
  });
  return units;
};
