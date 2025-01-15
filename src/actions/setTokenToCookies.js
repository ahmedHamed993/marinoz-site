"use server";
import { cookies } from "next/headers";

export async function setTokenToCookies(token) {
  const cookieStore = await cookies();
  cookieStore.set("token", token);
}
export async function setUserIdToCookies(id) {
  const cookieStore = await cookies();

  cookieStore.set("userId", id);
}
