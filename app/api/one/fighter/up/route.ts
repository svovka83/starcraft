import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const fighterUp = await prisma.fighterUp.findFirst();

  return NextResponse.json(fighterUp);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const fighterUp = await prisma.fighterUp.create({
    data: body,
  });

  return NextResponse.json(fighterUp);
}
