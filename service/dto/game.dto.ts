import { infoType, unitType } from "@/store/game";

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

export type SaveGameDTO = {};
