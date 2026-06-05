"use client";

import { ISSUE_CATEGORIES }
from "@/constants/issueFilters";

interface Props {
  selected: string;
  onChange: (
    value: string
  ) => void;
}

export default function IssueFilters({
  selected,
  onChange,
}: Props) {
  return (
    <div className="mb-6 flex gap-3 flex-wrap">
      {ISSUE_CATEGORIES.map(
        (category) => (
          <button
            key={category}
            onClick={() =>
              onChange(category)
            }
            className={`rounded-lg border px-4 py-2 ${
              selected === category
                ? "bg-black text-white"
                : ""
            }`}
          >
            {category}
          </button>
        )
      )}
    </div>
  );
}