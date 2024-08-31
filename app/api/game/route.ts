import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { deleteGame } from "@/functions";
import { CreateGameClient } from "@/service/dto/game.dto";

export async function GET(req: NextRequest) {
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

    const games = await prisma.game.findFirst({
      where: {
        id: getGame.id,
      },
      select: {
        nameOne: true,
        nameTwo: true,
        imageOne: true,
        imageTwo: true,
        manaOne: true,
        manaTwo: true,
        shopOne: true,
        shopTwo: true,
        battleOne: true,
        battleTwo: true,
        fighterUpOne: true,
        fighterUpTwo: true,
        fighterDownOne: true,
        fighterDownTwo: true,
        mineralsOne: true,
        mineralsTwo: true,
        mineOne: true,
        mineTwo: true,
        bossOne: true,
        bossTwo: true,
        turn: true,
      },
    });

    return NextResponse.json(games);
  } catch (error) {
    console.log("[GET_GAME]", error);
    return NextResponse.json(
      { message: "Can not find game." },
      { status: 404 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("starcraftToken")?.value;

    if (!token) {
      token = crypto.randomUUID();
      cookies().set("starcraftToken", token, { path: "/" });
    }

    const getGame = await prisma.game.findFirst({
      where: {
        token: token,
      },
    });

    if (getGame) {
      deleteGame(getGame);
    }

    const body = (await req.json()) as CreateGameClient;

    const createGame = await prisma.game.create({
      data: {
        token: token,
        nameOne: body.infoOne.name,
        nameTwo: body.infoTwo.name,
        imageOne: body.infoOne.image,
        imageTwo: body.infoTwo.image,
        shopOne: {
          createMany: {
            data: body.shopOne,
          },
        },
        shopTwo: {
          createMany: {
            data: body.shopTwo,
          },
        },
      },
    });

    const startGame = await prisma.game.findFirst({
      where: {
        id: createGame.id,
      },
      select: {
        nameOne: true,
        nameTwo: true,
        imageOne: true,
        imageTwo: true,
        shopOne: true,
        shopTwo: true,
      },
    });

    return NextResponse.json(startGame);
  } catch (error) {
    console.log("[POST_GAME]", error);
    return NextResponse.json(
      { message: "Can not create game. Please try again." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
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

    deleteGame(getGame);

    return NextResponse.json(
      { message: "Congratulation :-). Game deleted." },
      { status: 200 }
    );
  } catch (error) {
    console.log("[DELETE_GAME]", error);
    return NextResponse.json(
      { message: "Can not delete game." },
      { status: 500 }
    );
  }
}
