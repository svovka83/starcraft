import { axiosInstance } from "./instance";
import { infoType, unitType } from "@/store/game";

export const getGame = async (): Promise<any> => {
  const { data } = await axiosInstance.get("/game");
  return data;
};

export const createGame = async (
  infoOne: infoType,
  infoTwo: infoType,
  one: unitType[],
  two: unitType[]
): Promise<any> => {
  const { data } = await axiosInstance.post("/game", {
    infoOne,
    infoTwo,
    one,
    two,
  });
  return data;
};

export const isToken = async (): Promise<any> => {
  const { data } = await axiosInstance.get("/game/token");
  return data;
};
