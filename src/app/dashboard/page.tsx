import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome {session.user?.name}
      </h1>
    </div>
  );
}