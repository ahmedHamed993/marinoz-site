"use server";
import { cookies } from "next/headers";

export async function getTokenToCookies() {
  const cookieStore = await cookies();

  return cookieStore.get("token");
}
export async function getUserIdToCookies() {
  const cookieStore = await cookies();

  return cookieStore.get("userId");
}
