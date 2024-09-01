import { PlayerProps, infoType, unitType } from "@/store/game";

export type CreateGameClient = {
  infoOne: infoType;
  infoTwo: infoType;
  shopOne: unitType[];
  shopTwo: unitType[];
};
export type CreateGameServer = {
  nameOne: string;
  nameTwo: string;
  imageOne: string;
  imageTwo: string;
  shopOne: unitType[];
  shopTwo: unitType[];
};

export type SaveGameClient = {
  one: PlayerProps;
  two: PlayerProps;
  turn: boolean;
};

export type GetGameServer = {
  nameOne: string;
  nameTwo: string;
  imageOne: string;
  imageTwo: string;
  manaOne: number;
  manaTwo: number;
  shopOne: unitType[];
  shopTwo: unitType[];
  battleOne: unitType[];
  battleTwo: unitType[];
  fighterUpOne: unitType;
  fighterUpTwo: unitType;
  fighterDownOne: unitType;
  fighterDownTwo: unitType;
  workerOne: number;
  workerTwo: number;
  mineralsOne: number;
  mineralsTwo: number;
  mineOne: number;
  mineTwo: number;
  bossOne: number;
  bossTwo: number;
  turn: boolean;
};
