export type droneType = {
  id: number;
  name: string;
  health: number;
  attack: number;
  price: number;
};

export type zergType = {
  id: number;
  name: string;
  health: number;
  attack: number;
  price: number;
};

export const DRONE: droneType = {
  id: 11,
  name: "Drone",
  health: 1,
  attack: 1,
  price: 1,
};

export const ZERG: zergType[] = [
  {
    id: 1,
    name: "Zergling",
    health: 1,
    attack: 1,
    price: 1,
  },
  {
    id: 2,
    name: "Gydralisk",
    health: 2,
    attack: 2,
    price: 2,
  },
  {
    id: 3,
    name: "Mutalisk",
    health: 3,
    attack: 2,
    price: 3,
  },
  {
    id: 4,
    name: "Ultralisk",
    health: 8,
    attack: 5,
    price: 6,
  },
];
