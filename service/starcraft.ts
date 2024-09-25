import { axiosInstance } from "./instance";
import { Category, Unit } from "@prisma/client";

export const categories = async (): Promise<Category[]> => {
  const { data } = await axiosInstance.get<Category[]>("/starcraft/categories");
  return data;
};

export const searchUnits = async (query: string): Promise<Unit[]> => {
  const { data } = await axiosInstance.get<Unit[]>("/starcraft/unit/search", {
    params: {
      query,
    },
  });
  return data;
};
