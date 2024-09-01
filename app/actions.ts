"use server";

import { cookies } from "next/headers";

export async function removeToken() {
  try {
    const cookieStore = cookies();

    cookieStore.get("starcraftToken")?.value;

    cookieStore.delete("starcraftToken");
  } catch (error) {
    console.log("[TAKE_OFF_TOKEN]", error);
  }
}
