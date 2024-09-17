import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const unitsGroup = await prisma.category.findMany({
      include: {
        units: true,
      },
    });

    return NextResponse.json(unitsGroup);
  } catch (error) {
    console.log("[GET_UNITS_GROUP]", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
