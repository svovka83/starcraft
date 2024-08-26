import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const shopOne = await prisma.shopOne.findFirst({
    include: {
      units: true,
    },
  });

  return NextResponse.json(shopOne);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const createShopOne = await prisma.shopOne.create({
    data: {
      gameId: 1,
      units: {
        createMany: {
          data: body,
        },
      },
    },
  });

  const getShopOne = await prisma.shopOne.findFirst({
    where: {
      id: createShopOne.id,
    },
    include: {
      units: true,
    },
  });

  return NextResponse.json(getShopOne);
}
