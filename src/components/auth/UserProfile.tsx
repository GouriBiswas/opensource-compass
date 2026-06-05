"use client";

import { useSession } from "next-auth/react";

export default function UserProfile() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="space-y-2">
      <img
        src={session.user?.image ?? ""}
        alt="Profile"
        width={60}
        height={60}
        className="rounded-full"
      />

      <p>{session.user?.name}</p>

      <p>{session.user?.email}</p>
    </div>
  );
}