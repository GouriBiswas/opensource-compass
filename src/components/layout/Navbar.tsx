"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="border-b">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          OpenSource Compass
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/discover">Discover</Link>
          <Link href="/dashboard">Dashboard</Link>

          {!session ? (
            <button
              onClick={() => signIn("github")}
              className="rounded-lg bg-black px-4 py-2 text-white"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <img
                src={session.user?.image ?? ""}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />

              <span className="text-sm">
                {session.user?.name}
              </span>

              <button
                onClick={() => signOut()}
                className="rounded-lg border px-3 py-1"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}