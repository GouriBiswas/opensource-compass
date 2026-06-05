import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold">
          Discover and Contribute to
          <span className="text-blue-600">
            {" "}Open Source
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          AI-powered platform helping developers discover repositories,
          understand issues, and build their open-source journey.
        </p>

        <div className="flex gap-4">
          <Link
            href="/discover"
            className="rounded-lg bg-black px-6 py-3 text-white"
          >
            Explore Issues
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border px-6 py-3"
          >
            Dashboard
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}