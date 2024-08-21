import command from "/images/imgTerran/command.png";
import KSM from "/images/imgTerran/KSM.png";
import marine from "/images/imgTerran/marine.png";
import fireman from "/images/imgTerran/fireman.png";
import maroder from "/images/imgTerran/maroder.png";
import tank from "/images/imgTerran/tank.png";

export const INFO_T = {
  name: "Terran",
  image: command,
};

export const TERRAN = [
  {
    id: 1,
    name: "KSM",
    image: KSM,
    health: 1,
    mana: 1,
    attack: 1,
    price: 1,
  },
  {
    id: 2,
    name: "marine",
    image: marine,
    health: 2,
    mana: 1,
    attack: 1,
    price: 1,
  },
  {
    id: 3,
    name: "fireman",
    image: fireman,
    health: 3,
    mana: 2,
    attack: 3,
    price: 2,
  },
  {
    id: 4,
    name: "maroder",
    image: maroder,
    health: 3,
    mana: 2,
    attack: 4,
    price: 3,
  },
  {
    id: 5,
    name: "tank",
    image: tank,
    health: 4,
    mana: 3,
    attack: 6,
    price: 5,
  },
];
