import { unitsGroupDTO } from "./dto/starcraft.dto";
import { axiosInstance } from "./instance";
import { Category } from "@prisma/client";

export const categories = async (): Promise<Category[]> => {
  const { data } = await axiosInstance.get<Category[]>("/starcraft/categories");
  return data;
};

export const unitsGroup = async (): Promise<unitsGroupDTO[]> => {
  const { data } = await axiosInstance.get<unitsGroupDTO[]>("/starcraft/units");
  return data;
};
