import { StaticImageData } from "next/image";

import drone from "/images/drone.webp";
import zerling from "/images/zerling.webp";
import gydralisk from "/images/gidralisk.webp";
import mutalisk from "/images/mutalisk.webp";

export type workerType = {
  id: number;
  name: string;
  image: StaticImageData;
  health: number;
  mana: number;
  attack: number;
  price: number;
};

export type unitType = {
  id: number;
  name: string;
  image: StaticImageData;
  health: number;
  mana: number;
  attack: number;
  price: number;
};

export const DRONE = {
  id: 11,
  name: "Drone",
  image: drone,
  health: 1,
  mana: 1,
  attack: 1,
  price: 1,
};

export const ZERG = [
  {
    id: 1,
    name: "zergling",
    image: zerling,
    health: 1,
    mana: 1,
    attack: 1,
    price: 1,
  },
  {
    id: 2,
    name: "gydralisk",
    image: gydralisk,
    health: 2,
    mana: 1,
    attack: 2,
    price: 2,
  },
  {
    id: 3,
    name: "mutalisk",
    image: mutalisk,
    health: 3,
    mana: 2,
    attack: 2,
    price: 3,
  },
  {
    id: 4,
    name: "ultralisk",
    image: drone,
    health: 8,
    mana: 3,
    attack: 5,
    price: 6,
  },
];
