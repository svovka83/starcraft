import { axiosInstance } from "./instance";
import { Unit } from "@prisma/client";

export const register = async (username: string, password: string) => {
  const { data } = await axiosInstance.post("/users/register", {
    username,
    password,
  });
  return data;
};

export const login = async (username: string, password: string) => {
  const { data } = await axiosInstance.post("/users/login", {
    username,
    password,
  });
  return data;
};

export const auth = async () => {
  const { data } = await axiosInstance.get("/users/auth");
  return data;
};

export const user = async () => {
  const { data } = await axiosInstance.get("/users/user");
  return data;
};

export const users = async (): Promise<number> => {
  const { data } = await axiosInstance.get<number>("/users");
  return data;
};
