export const REPOS_API_URL = "https://api.github.com/users/vigraton/repos?sort=updated&per_page=30";

export async function repoFetcher(url: string) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

// Keep backwards compat
async function getMyRepos() {
  return repoFetcher(REPOS_API_URL);
}

export const api = { get: getMyRepos };
