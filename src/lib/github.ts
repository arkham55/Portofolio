/**
 * GitHub public API client.
 * Uses the unauthenticated REST API (60 req/hr) — no token needed for public data.
 */

export interface GitHubUser {
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

const BASE = "https://api.github.com";
const GITHUB_USERNAME = "arkham55";

async function ghFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { Accept: "application/vnd.github.v3+json" },
    next: { revalidate: 3600 }, // ISR — revalidate every hour
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json() as Promise<T>;
}

export async function fetchGitHubUser(): Promise<GitHubUser> {
  return ghFetch<GitHubUser>(`/users/${GITHUB_USERNAME}`);
}

export async function fetchGitHubRepos(
  sort: "updated" | "stars" | "created" = "updated",
  perPage = 6,
): Promise<GitHubRepo[]> {
  const repos = await ghFetch<GitHubRepo[]>(
    `/users/${GITHUB_USERNAME}/repos?sort=${sort}&per_page=${perPage * 2}&type=owner`,
  );
  // Filter out forks, sort by stars descending, take top perPage
  return repos
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, perPage);
}
