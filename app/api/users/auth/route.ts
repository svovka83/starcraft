import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("starcraftToken")?.value;

    if (!token) {
      return NextResponse.json({ success: false });
    }

    const user = await prisma.user.findFirst({
      where: {
        token: token,
      },
    });

    if (user) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false });
  } catch (error) {
    console.log("[GET_USER]", error);
    return NextResponse.json(
      { message: "Can not find user rights." },
      { status: 403 }
    );
  }
}
