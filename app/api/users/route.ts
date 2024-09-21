import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(users.length);
  } catch (error) {
    console.log("[GET_USERS]", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
