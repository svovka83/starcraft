import { prisma } from "@/prisma/prisma-client";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    let token = req.cookies.get("starcraftToken")?.value;

    const games = await prisma.game.findFirst({
      where: {
        token: token,
      },
      include: {
        infoOne: true,
        infoTwo: true,
        shopOne: {
          include: {
            unitsOne: true,
          },
        },
        shopTwo: {
          include: {
            unitsTwo: true,
          },
        },
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

    const body = await req.json();

    const createGame = await prisma.game.create({
      data: {
        token: token,
        infoOne: {
          create: {
            name: body.infoOne.name,
            image: body.infoOne.image,
          },
        },
        infoTwo: {
          create: {
            name: body.infoTwo.name,
            image: body.infoTwo.image,
          },
        },
        shopOne: {
          create: {
            unitsOne: {
              createMany: {
                data: body.one,
              },
            },
          },
        },
        shopTwo: {
          create: {
            unitsTwo: {
              createMany: {
                data: body.two,
              },
            },
          },
        },
      },
    });

    const getGame = await prisma.game.findFirst({
      where: {
        id: createGame.id,
      },
      include: {
        infoOne: true,
        infoTwo: true,
        shopOne: {
          include: {
            unitsOne: true,
          },
        },
        shopTwo: {
          include: {
            unitsTwo: true,
          },
        },
      },
    });

    return NextResponse.json(getGame);
  } catch (error) {
    console.log("[POST_GAME]", error);
    return NextResponse.json(
      { message: "Can not create game. Please try again." },
      { status: 500 }
    );
  }
}
