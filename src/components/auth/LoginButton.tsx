"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("github")}
      className="rounded-lg bg-black px-4 py-2 text-white"
    >
      Login with GitHub
    </button>
  );
}