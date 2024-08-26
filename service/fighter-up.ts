import { axiosInstance } from "./instance";

export const createFighterUp = async (value: any): Promise<any> => {
  const { data } = await axiosInstance.post("/one/fighter/up", value);
  return data;
};
