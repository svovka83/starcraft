import { axiosInstance } from "./instance";

export const getGame = async (): Promise<any> => {
  const { data } = await axiosInstance.get("/game");
  return data;
};

export const createGame = async (one: any, two: any): Promise<any> => {
  const { data } = await axiosInstance.post("/game", { one, two });
  return data;
};
