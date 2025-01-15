"use server";
import { cookies } from "next/headers";

export async function removeTokenFromCookies(token) {
  const cookieStore = await cookies();

  cookieStore.delete("token", token);
}

export async function removeUserIdFromCookies(id) {
  const cookieStore = await cookies();

  cookieStore.delete("userId", id);
}
