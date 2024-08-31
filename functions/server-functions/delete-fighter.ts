export async function deleteFighter(
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
}
