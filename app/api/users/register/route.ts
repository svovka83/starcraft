import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as User;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const payload = { username: body.username };
    const secret = "starcraftSecretToken";
    const options = { expiresIn: "30d" };
    const token = jwt.sign(payload, secret, options);

    cookies().set("starcraftToken", token, { path: "/" });

    const user: User = await prisma.user.create({
      data: {
        username: body.username,
        password: hashedPassword,
        token: token,
      },
    });

    const { password, ...rest } = user;

    return NextResponse.json({ ...rest }, { status: 200 });
  } catch (error) {
    console.log("[POST_REGISTER]", error);
    NextResponse.json(
      { message: "Server error. Can not register." },
      { status: 500 }
    );
  }
}
