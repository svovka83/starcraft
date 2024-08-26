import { axiosInstance } from "./instance";

export const createShop = async (values: any): Promise<any> => {
  const { data } = await axiosInstance.post("/one/shop", values);
  return data;
};
