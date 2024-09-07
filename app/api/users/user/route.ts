import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("starcraftToken")?.value;

    if (!token) {
      return NextResponse.json({ message: "Not authorized." }, { status: 403 });
    }

    const user = await prisma.user.findFirst({
      where: {
        token: token,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Can not find user." },
        { status: 404 }
      );
    }

    const { username } = user;

    return NextResponse.json({ username }, { status: 200 });
  } catch (error) {
    console.log("[GET_USER]", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
