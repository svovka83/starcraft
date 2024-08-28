import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("starcraftToken")?.value;

    if (!token) {
      return NextResponse.json({ success: false });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("[GET_TOKEN]", error);
    return NextResponse.json(
      { message: "Can not find user rights." },
      { status: 404 }
    );
  }
}
