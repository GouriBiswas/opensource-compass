export interface GithubIssue {
  id: number;
  title: string;
  html_url: string;
  created_at: string;

  repository_url: string;

  labels: {
    id: number;
    name: string;
    color: string;
  }[];

  repository?: {
    name: string;
    language: string;
    stars: number;
  };
}