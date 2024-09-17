import { Unit } from "@prisma/client";

export type unitsGroupDTO = {
  id: number;
  name: string;
  createAt: Date;
  updateAt: Date;
  units: Unit[];
};
