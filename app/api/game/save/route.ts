import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("starcraftToken")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "User does not have rights." },
        { status: 403 }
      );
    }

    const getGame = await prisma.game.findFirst({
      where: {
        token: token,
      },
    });

    if (!getGame) {
      return NextResponse.json(
        { message: "Can not find game." },
        { status: 404 }
      );
    }

    const body = await req.json();

    await prisma.game.update({
      where: {
        id: getGame.id,
      },
      data: {
        nameOne: body.one.name,
        nameTwo: body.two.name,
        imageOne: body.one.image,
        imageTwo: body.two.image,
        manaOne: body.one.mana,
        manaTwo: body.two.mana,
        // shopOne: {
        //   updateMany: {
        //     where: {
        //       gameId: getGame.id,
        //     },
        //     data: 2,
        //   },
        // },
        // shopTwo: {
        //   updateMany: {
        //     where: {
        //       gameId: getGame.id,
        //     },
        //     data: body.two.units,
        //   },
        // },
        // battleOne: {
        //   update: {
        //     ...body.battleOne,
        //   },
        // },
        // battleTwo: {
        //   update: {
        //     ...body.battleTwo,
        //   },
        // },
        // fighterUpOne: {
        //   update: {
        //     ...body.fighterUpOne,
        //   },
        // },
        // fighterUpTwo: {
        //   update: {
        //     ...body.fighterUpTwo,
        //   },
        // },
        // fighterDownOne: {
        //   update: {
        //     ...body.fighterDownOne,
        //   },
        // },
        // fighterDownTwo: {
        //   update: {
        //     ...body.fighterDownTwo,
        //   },
        // },
        // workerOne: {
        //   update: {
        //     ...body.workerOne,
        //   },
        // },
        // workerTwo: {
        //   update: {
        //     ...body.workerTwo,
        //   },
        // },
        // mineralsOne: body.mineralsOne,
        // mineralsTwo: body.mineralsTwo,
        // mineOne: body.mineOne,
        // mineTwo: body.mineTwo,
        // bossOne: body.bossOne,
        // bossTwo: body.bossTwo,
      },
    });

    return NextResponse.json({ message: "Game saved." }, { status: 200 });
  } catch (error) {
    console.log("[POST_SAVE_GAME]", error);
    return NextResponse.json(
      { message: "Can not save game." },
      { status: 500 }
    );
  }
}
