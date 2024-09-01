import { prisma } from "@/prisma/prisma-client";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as User;

    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Wrong login or password." },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(body.password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Wrong login or password." },
        { status: 400 }
      );
    }

    const payload = { username: body.username };
    const secret = "starcraftSecretToken";
    const options = { expiresIn: "30d" };
    const token = jwt.sign(payload, secret, options);

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        token: token,
      },
    });

    cookies().set("starcraftToken", token, { path: "/" });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("[POST_LOGIN]", error);
    NextResponse.json({ message: "Can not login." }, { status: 500 });
  }
}
