import { unitType } from "@/store/game";

export async function createFighter(
  fighterClient: unitType,
  fighterServer: any, // ?????
  gameId: number
) {
  const getFighter = await fighterServer.findFirst({
    where: {
      gameId,
    },
  });

  if (getFighter) {
    await fighterServer.delete({
      where: {
        id: getFighter.id,
      },
    });
  }

  if (fighterClient.id) {
    await fighterServer.create({
      data: fighterClient,
    });
  }
}
