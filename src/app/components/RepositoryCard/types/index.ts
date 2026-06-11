export const LANGUAGE_COLORS: Record<string, string> = {
  Java: "#b07219",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Ruby: "#b90003",
  C: "#555555",
  PHP: "#4F5D95",
  TypeScript: "#3178c6",
  Shell: "#89e051",
  Go: "#00d5ff",
};

export interface Repository {
  id: number;
  name: string;
  language: string;
  updated_at: string;
  isRepoPrivate?: boolean;
  description?: string;
  stargazers_count: number
}
