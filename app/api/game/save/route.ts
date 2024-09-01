import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { SaveGameClient } from "@/service/dto/game.dto";
import { createFighter } from "@/functions";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("starcraftToken")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "User does not have rights." },
        { status: 403 }
      );
    }

    const getUser = await prisma.user.findFirst({
      where: {
        token: token,
      },
    });

    if (!getUser) {
      return NextResponse.json(
        { message: "Can not find user." },
        { status: 404 }
      );
    }

    const getGame = await prisma.game.findFirst({
      where: {
        userId: getUser.id,
      },
    });

    if (!getGame) {
      return NextResponse.json(
        { message: "Can not find game." },
        { status: 404 }
      );
    }

    const body = (await req.json()) as SaveGameClient;

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
        battleOne: {
          deleteMany: {},
        },
        battleTwo: {
          deleteMany: {},
        },
        mineralsOne: body.one.minerals,
        mineralsTwo: body.two.minerals,
        mineOne: body.one.mine,
        mineTwo: body.two.mine,
        bossOne: body.one.boss,
        bossTwo: body.two.boss,
        turn: body.turn,
      },
    });

    await prisma.battleOne.createMany({
      data: body.one.battleground,
    });
    await prisma.battleTwo.createMany({
      data: body.two.battleground,
    });

    createFighter(body.one.fighterUp, prisma.fighterUpOne, getGame.id);
    createFighter(body.two.fighterUp, prisma.fighterUpTwo, getGame.id);
    createFighter(body.one.fighterDown, prisma.fighterDownOne, getGame.id);
    createFighter(body.two.fighterDown, prisma.fighterDownTwo, getGame.id);

    return NextResponse.json({ message: "Game saved." }, { status: 200 });
  } catch (error) {
    console.log("[POST_SAVE_GAME]", error);
    return NextResponse.json(
      { message: "Can not save game." },
      { status: 500 }
    );
  }
}
