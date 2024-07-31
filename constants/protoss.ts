import probe from "/images/imgProtoss/probe.webp";
import zealot from "/images/imgProtoss/zealot.webp";
import stalker from "/images/imgProtoss/stalker.webp";
import colossus from "/images/imgProtoss/colossus.webp";
import carrier from "/images/imgProtoss/carrier.webp";

export const PROBE = {
  id: 1,
  name: "Probe",
  image: probe,
  health: 1,
  mana: 1,
  attack: 1,
  price: 1,
};

export const PROTOSS = [
  {
    id: 1,
    name: "zealot",
    image: zealot,
    health: 2,
    mana: 1,
    attack: 2,
    price: 2,
  },
  {
    id: 2,
    name: "stalker",
    image: stalker,
    health: 2,
    mana: 2,
    attack: 3,
    price: 3,
  },
  {
    id: 3,
    name: "colossus",
    image: colossus,
    health: 5,
    mana: 3,
    attack: 3,
    price: 5,
  },
  {
    id: 4,
    name: "carrier",
    image: carrier,
    health: 6,
    mana: 3,
    attack: 3,
    price: 6,
  },
];
