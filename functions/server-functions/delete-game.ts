import { prisma } from "@/prisma/prisma-client";

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
    },
  });

  await prisma.game.delete({
    where: {
      id: getGame.id,
    },
  });
}
