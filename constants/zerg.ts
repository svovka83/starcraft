import lair from "/images/imgZerg/lair.webp";
import drone from "/images/imgZerg/drone.webp";
import zerling from "/images/imgZerg/zerling.webp";
import gydralisk from "/images/imgZerg/gidralisk.webp";
import mutalisk from "/images/imgZerg/mutalisk.webp";
import ultralisk from "/images/imgZerg/ultralisk.webp";

export const INFO_Z = {
  name: "Zerg",
  image: lair,
};

export const ZERG = [
  {
    id: 1,
    name: "Drone",
    image: drone,
    health: 1,
    mana: 1,
    attack: 1,
    price: 1,
  },
  {
    id: 2,
    name: "zergling",
    image: zerling,
    health: 1,
    mana: 1,
    attack: 1,
    price: 1,
  },
  {
    id: 3,
    name: "gydralisk",
    image: gydralisk,
    health: 2,
    mana: 1,
    attack: 2,
    price: 2,
  },
  {
    id: 4,
    name: "mutalisk",
    image: mutalisk,
    health: 3,
    mana: 2,
    attack: 2,
    price: 3,
  },
  {
    id: 5,
    name: "ultralisk",
    image: ultralisk,
    health: 8,
    mana: 3,
    attack: 5,
    price: 6,
  },
];
