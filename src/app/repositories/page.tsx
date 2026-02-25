"use client";

import Header from "../components/Header/header";
import Profile from "../components/Profile/profile";
import RepositoryCard from "../components/RepositoryCard/card";
import { useState, useMemo } from "react";
import useSWR from "swr";
import { REPOS_API_URL, repoFetcher } from "../services/repo.api";
import { Search, SortDesc } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description?: string;
  language: string;
  updated_at: string;
  private: boolean;
  stargazers_count?: number;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Updated today";
  if (diffDays === 1) return "Updated yesterday";
  if (diffDays < 30) return `Updated ${diffDays} days ago`;
  if (diffDays < 365) return `Updated ${Math.floor(diffDays / 30)} months ago`;
  return `Updated on ${date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
}

function SkeletonCard() {
  return (
    <div className="w-full border border-border rounded-lg bg-background-secondary p-5 animate-pulse">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="h-5 w-48 bg-border rounded" />
        <div className="h-5 w-16 bg-border rounded-full" />
      </div>
      <div className="h-4 w-full bg-border rounded mb-2" />
      <div className="h-4 w-2/3 bg-border rounded mb-4" />
      <div className="flex items-center gap-4 pt-3 border-t border-border">
        <div className="h-3 w-20 bg-border rounded" />
        <div className="h-6 w-14 bg-border rounded" />
        <div className="h-3 w-28 bg-border rounded ml-auto" />
      </div>
    </div>
  );
}

export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState("All");

  const { data: repos, error, isLoading } = useSWR<Repo[]>(REPOS_API_URL, repoFetcher);

  const profile = {
    name: "Vivian Graton",
    username: "vigraton",
    followers: 11,
    following: 16,
    location: "SP, Brasil",
    company: "Valint Group Brasil",
  };

  const languages = useMemo(() => {
    if (!repos) return [];
    const langs = new Set(repos.map((r) => r.language).filter(Boolean));
    return ["All", ...Array.from(langs).sort()];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    if (!repos) return [];
    return repos.filter((repo) => {
      const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLanguage = languageFilter === "All" || repo.language === languageFilter;
      return matchesSearch && matchesLanguage;
    });
  }, [repos, searchQuery, languageFilter]);

  return (
    <>
      <Header />

      <main className="flex flex-col lg:flex-row gap-8 px-4 lg:px-8 py-8 max-w-[1400px] mx-auto">
        {/* Profile sidebar */}
        <div className="lg:w-[296px] flex-shrink-0">
          <Profile {...profile} />
        </div>

        {/* Repositories section */}
        <div className="flex-1 min-w-0">
          {/* Search and filter bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted" />
              <input
                type="text"
                placeholder="Find a repository..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-border rounded-md pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                aria-label="Search repositories"
              />
            </div>

            {/* Language filter */}
            <div className="relative">
              <SortDesc size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted pointer-events-none" />
              <select
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="appearance-none bg-background border border-border rounded-md pl-9 pr-8 py-2 text-sm text-foreground cursor-pointer hover:border-border-hover focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                aria-label="Filter by language"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Repo count */}
          {!isLoading && !error && (
            <p className="text-foreground-muted text-sm mb-4">
              <span className="font-semibold text-foreground">{filteredRepos.length}</span>
              {" "}result{filteredRepos.length !== 1 ? "s" : ""}
              {searchQuery && (
                <> for <span className="font-semibold text-foreground">{`"${searchQuery}"`}</span></>
              )}
            </p>
          )}

          {/* Loading state */}
          {isLoading && (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-danger text-sm font-medium">Failed to load repositories</p>
              <p className="text-foreground-muted text-sm mt-1">Please try again later.</p>
            </div>
          )}

          {/* Empty state */}
          {!isLoading && !error && filteredRepos.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-foreground text-sm font-medium">No repositories found</p>
              <p className="text-foreground-muted text-sm mt-1">
                {searchQuery ? "Try a different search term." : "Nothing to see here yet."}
              </p>
            </div>
          )}

          {/* Repository list */}
          {!isLoading && !error && filteredRepos.length > 0 && (
            <div className="flex flex-col gap-4">
              {filteredRepos.map((repo) => (
                <RepositoryCard
                  key={repo.id}
                  responseData={{
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    language: repo.language,
                    updatedAt: repo.updated_at ? formatDate(repo.updated_at) : undefined,
                    private: repo.private,
                    stargazers_count: repo.stargazers_count,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
