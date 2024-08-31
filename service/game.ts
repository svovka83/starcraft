import { axiosInstance } from "./instance";
import { PlayerProps, infoType, unitType } from "@/store/game";
import { CreateGameServer, GetGameServer } from "./dto/game.dto";

export const getGame = async (): Promise<GetGameServer> => {
  const { data } = await axiosInstance.get("/game");
  return data;
};

export const createGame = async (
  infoOne: infoType,
  infoTwo: infoType,
  shopOne: unitType[],
  shopTwo: unitType[]
): Promise<CreateGameServer> => {
  const { data } = await axiosInstance.post<CreateGameServer>("/game", {
    infoOne,
    infoTwo,
    shopOne,
    shopTwo,
  });
  return data;
};

export const isToken = async (): Promise<any> => {
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
