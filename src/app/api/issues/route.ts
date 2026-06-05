import { NextRequest, NextResponse } from "next/server";

import { getIssues } from "@/services/github.service";

export async function GET(
  request: NextRequest
) {
  const { searchParams } =
    new URL(request.url);

  const page =
    Number(
      searchParams.get("page")
    ) || 1;

  const category =
    searchParams.get("category") ||
    "good-first-issue";

  const issues =
    await getIssues({
      page,
      category,
    });

  return NextResponse.json(issues);
}