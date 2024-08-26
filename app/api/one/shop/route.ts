import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const shop = await prisma.shop.findFirst({
    include: {
      units: true,
    },
  });

  return NextResponse.json(shop);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const createShopOne = await prisma.shop.create({
    data: {
      units: {
        createMany: {
          data: body,
        },
      },
    },
  });

  const getShopOne = await prisma.shop.findFirst({
    where: {
      id: createShopOne.id,
    },
    include: {
      units: true,
    },
  });

  return NextResponse.json(getShopOne);
}
