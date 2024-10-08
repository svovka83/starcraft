import { axiosInstance } from "./instance";
import { PlayerProps, infoType, unitType } from "@/store/game";
import { CreateGameServer, GetGameServer } from "./dto/game.dto";
import { GameMode } from "@prisma/client";

export const getGame = async (): Promise<GetGameServer> => {
  const { data } = await axiosInstance.get("/game");
  return data;
};

export const createGame = async (
  infoOne: infoType,
  infoTwo: infoType,
  shopOne: unitType[],
  shopTwo: unitType[],
  gameMode: GameMode,
  level: number
): Promise<CreateGameServer> => {
  const { data } = await axiosInstance.post<CreateGameServer>("/game", {
    infoOne,
    infoTwo,
    shopOne,
    shopTwo,
    gameMode,
    level,
  });
  return data;
};

export const deleteGame = async () => {
  const { data } = await axiosInstance.delete("/game");
  return data;
};

export const isGame = async () => {
  const { data } = await axiosInstance.get("/game/protection");
  return data;
};

export const saveGame = async (
  one: PlayerProps,
  two: PlayerProps,
  turn: boolean
) => {
  const { data } = await axiosInstance.post("/game/save", {
    one,
    two,
    turn,
  });
  return data;
};
