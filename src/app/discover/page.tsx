"use client";

import { useEffect, useState } from "react";

import IssueCard from "@/components/github/IssueCard";
import IssueFilters from "@/components/github/IssueFilters";

interface GithubIssue {
  id: number;
  title: string;
  html_url: string;

  labels: {
    name: string;
  }[];
}

export default function DiscoverPage() {
  const [issues, setIssues] = useState<GithubIssue[]>([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] =
    useState("good-first-issue");

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  async function fetchIssues() {
    try {
      setLoading(true);

      const response = await fetch(
        `/api/issues?page=${page}&category=${category}`
      );

      const data = await response.json();

      setIssues(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchIssues();
  }, [category, page]);

  const filteredIssues =
    issues.filter((issue) =>
      issue.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold">
          Discover Open Source Issues
        </h1>

        <p className="text-gray-500">
          Find beginner-friendly issues and
          start contributing to open source.
        </p>
      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search issues..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="mb-6 w-full rounded-lg border p-3"
      />

      {/* Filters */}

      <IssueFilters
        selected={category}
        onChange={(value) => {
          setCategory(value);
          setPage(1);
        }}
      />

      {/* Loading */}

      {loading && (
        <div className="mt-10">
          Loading issues...
        </div>
      )}

      {/* Issues */}

      {!loading && (
        <div className="grid gap-4">
          {filteredIssues.map(
            (issue) => (
              <IssueCard
                key={issue.id}
                title={issue.title}
                url={issue.html_url}
                labels={issue.labels.map(
                  (label) => label.name
                )}
              />
            )
          )}
        </div>
      )}

      {/* Pagination */}

      <div className="mt-10 flex justify-center gap-4">
        <button
          disabled={page === 1}
          onClick={() =>
            setPage((prev) =>
              Math.max(prev - 1, 1)
            )
          }
          className="rounded-lg border px-4 py-2"
        >
          Previous
        </button>

        <span className="flex items-center">
          Page {page}
        </span>

        <button
          onClick={() =>
            setPage((prev) => prev + 1)
          }
          className="rounded-lg border px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}