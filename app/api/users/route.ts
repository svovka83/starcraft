import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    const numberOfUsers: number = users.length;

    return NextResponse.json(numberOfUsers, { status: 200 });
  } catch (error) {
    console.log("[GET_USERS]", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
