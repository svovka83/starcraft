import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const units = await prisma.unit.findMany();

  return NextResponse.json(units);
}
