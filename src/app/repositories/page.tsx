"use client";

import Header from "../components/Header/header";
import Profile from "../components/Profile/profile";
import type { ProfileProps } from "../components/Profile/types";
import RepositoryCard from "../components/RepositoryCard/card";
import { useEffect } from "react";
import { useRepos } from "../hooks/useRepos";

export default function RepositoriesPage() {
  const { getRepos, repos } = useRepos();
  const profile: ProfileProps = {
    name: "",
    login: "",
    avatar_url: "",
    company: "",
    followers: null,
    following: null,
    location: "",
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <main className="pt-40">
      <Header />

      <div className="flex flex-col-1 lg:grid-cols-3 items-start gap-x-10">
        <div className="lg:col-span-1">
          <Profile {...profile} />
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-6 justify-start">
            {repos.map((repo) => (
              <RepositoryCard key={repo.id} {...repo} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
