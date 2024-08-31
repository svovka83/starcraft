import { prisma } from "@/prisma/prisma-client";
import { deleteFighter } from "..";

export async function deleteGame(getGame: any) {
  await prisma.game.update({
    where: {
      id: getGame.id,
    },
    data: {
      shopOne: {
        deleteMany: {},
      },
      shopTwo: {
        deleteMany: {},
      },
      battleOne: {
        deleteMany: {},
      },
      battleTwo: {
        deleteMany: {},
      },
    },
  });

  deleteFighter(prisma.fighterUpTwo, getGame.id);
  deleteFighter(prisma.fighterUpOne, getGame.id);
  deleteFighter(prisma.fighterDownOne, getGame.id);
  deleteFighter(prisma.fighterDownTwo, getGame.id);

  await prisma.game.delete({
    where: {
      id: getGame.id,
    },
  });
}
