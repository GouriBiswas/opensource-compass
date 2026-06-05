import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db/connect";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find();

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch users",
      },
      {
        status: 500,
      }
    );
  }
}