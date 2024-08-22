import lair from "/images/imgZerg/lair.png";
import drone from "/images/imgZerg/drone.png";
import zerling from "/images/imgZerg/zerling.png";
import gydral from "/images/imgZerg/gidral.png";
import mutalisk from "/images/imgZerg/mutalisk.png";
import ultralisk from "/images/imgZerg/ultralisk.png";

export const INFO_Z = {
  name: "Zerg",
  image: lair,
};

export const ZERG = [
  {
    id: 1,
    name: "drone",
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
    name: "gydral",
    image: gydral,
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
