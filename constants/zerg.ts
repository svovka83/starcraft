export type workerType = {
  id: number;
  name: string;
  health: number;
  mana: number;
  attack: number;
  price: number;
};

export type unitType = {
  id: number;
  name: string;
  health: number;
  mana: number;
  attack: number;
  price: number;
};

export const DRONE = {
  id: 11,
  name: "Drone",
  health: 1,
  mana: 1,
  attack: 1,
  price: 1,
};

export const ZERG = [
  {
    id: 1,
    name: "zergling",
    health: 1,
    mana: 1,
    attack: 1,
    price: 1,
  },
  {
    id: 2,
    name: "Gydralisk",
    health: 2,
    mana: 1,
    attack: 2,
    price: 2,
  },
  {
    id: 3,
    name: "Mutalisk",
    health: 3,
    mana: 2,
    attack: 2,
    price: 3,
  },
  {
    id: 4,
    name: "Ultralisk",
    health: 8,
    mana: 3,
    attack: 5,
    price: 6,
  },
];
