import { axiosInstance } from "./instance";

export const getShop = async (): Promise<any> => {
  const { data } = await axiosInstance.get("/one/shop");
  return data;
};

export const createShop = async (values: any): Promise<any> => {
  const { data } = await axiosInstance.post("/one/shop", values);
  return data;
};
