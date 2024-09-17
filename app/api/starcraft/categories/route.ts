import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const category = await prisma.category.findMany();

    return NextResponse.json(category);
  } catch (error) {
    console.log("[GET_CATEGORIES]", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
