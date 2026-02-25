"use client";

import { Star, Lock, Globe } from "lucide-react";
import { useState } from "react";

const LANGUAGE_COLORS: Record<string, string> = {
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
  Rust: "#dea584",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
};

export type RepoCardProps = {
  responseData: {
    id: number;
    name: string;
    description?: string;
    language: string;
    updatedAt?: string;
    private?: boolean;
    stargazers_count?: number;
  };
};

export default function RepositoryCard({ responseData }: RepoCardProps) {
  const languageColor = LANGUAGE_COLORS[responseData.language] || "#8b949e";
  const [starred, setStarred] = useState(false);
  const isPrivate = responseData.private ?? false;

  return (
    <article className="group relative flex flex-col justify-between w-full border border-border rounded-lg bg-background-secondary p-5 transition-all duration-200 hover:border-border-hover hover:bg-background-tertiary">
      {/* Top section */}
      <div className="flex flex-col gap-2">
        {/* Repo name + visibility badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-accent font-semibold text-base leading-snug line-clamp-1 hover:underline cursor-pointer break-all">
            {responseData.name}
          </h3>
          <span
            className={`flex-shrink-0 flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${
              isPrivate
                ? "border-border text-foreground-muted"
                : "border-border text-foreground-muted"
            }`}
          >
            {isPrivate ? <Lock size={12} /> : <Globe size={12} />}
            {isPrivate ? "Private" : "Public"}
          </span>
        </div>

        {/* Description */}
        {responseData.description && (
          <p className="text-foreground-muted text-sm leading-relaxed line-clamp-2">
            {responseData.description}
          </p>
        )}
      </div>

      {/* Bottom section */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border text-xs text-foreground-muted">
        {/* Language */}
        {responseData.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: languageColor }}
              aria-hidden="true"
            />
            <span>{responseData.language}</span>
          </div>
        )}

        {/* Star button */}
        <button
          onClick={() => setStarred(!starred)}
          className={`flex items-center gap-1 px-2 py-1 rounded-md border transition-colors cursor-pointer ${
            starred
              ? "border-warning/40 bg-warning/10 text-warning"
              : "border-border hover:border-border-hover hover:bg-background-tertiary text-foreground-muted"
          }`}
          aria-label={starred ? "Unstar repository" : "Star repository"}
        >
          <Star size={14} className={starred ? "fill-current" : ""} />
          <span>{(responseData.stargazers_count ?? 0) + (starred ? 1 : 0)}</span>
        </button>

        {/* Updated at */}
        {responseData.updatedAt && (
          <span className="ml-auto text-nowrap">{responseData.updatedAt}</span>
        )}
      </div>
    </article>
  );
}
