import axios from "axios";

export async function getIssues({
  page = 1,
  category = "good-first-issue",
}: {
  page?: number;
  category?: string;
}) {
  const queryMap = {
    "good-first-issue":
      "label:good-first-issue state:open",

    "help-wanted":
      "label:help-wanted state:open",

    bug:
      "label:bug state:open",

    documentation:
      "label:documentation state:open",

    enhancement:
      "label:enhancement state:open",
  };

  const query =
    queryMap[
      category as keyof typeof queryMap
    ];

  const response = await axios.get(
    "https://api.github.com/search/issues",
    {
      params: {
        q: query,
        per_page: 100,
        page,
      },
    }
  );

  return response.data.items;
}