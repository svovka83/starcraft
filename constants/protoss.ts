import nexus from "/images/imgProtoss/nexus.webp";
import probe from "/images/imgProtoss/probe.png";
import zealot from "/images/imgProtoss/zealot.png";
import stalker from "/images/imgProtoss/stalker.png";
import colossus from "/images/imgProtoss/colossus.png";
import carrier from "/images/imgProtoss/carrier.png";

export const INFO_P = {
  name: "Protoss",
  image: nexus,
};

export const PROTOSS = [
  {
    id: 1,
    name: "probe",
    image: probe,
    health: 1,
    mana: 1,
    attack: 1,
    price: 1,
  },
  {
    id: 2,
    name: "zealot",
    image: zealot,
    health: 2,
    mana: 1,
    attack: 2,
    price: 2,
  },
  {
    id: 3,
    name: "stalker",
    image: stalker,
    health: 2,
    mana: 2,
    attack: 3,
    price: 3,
  },
  {
    id: 4,
    name: "colossus",
    image: colossus,
    health: 5,
    mana: 3,
    attack: 3,
    price: 5,
  },
  {
    id: 5,
    name: "carrier",
    image: carrier,
    health: 6,
    mana: 3,
    attack: 3,
    price: 6,
  },
];
