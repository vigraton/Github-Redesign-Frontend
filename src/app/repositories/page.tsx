"use client";

import Header from "../components/Header/header";
import Profile from "../components/Profile/profile";
import RepositoryCard from "../components/RepositoryCard/card";
import { useEffect } from "react";
import { useRepos } from "../hooks/useRepos";

export default function RepositoriesPage() {
  const { getRepos, repos } = useRepos();

  useEffect(() => {
    getRepos();
  }, [getRepos]);

  return (
    <main className="pt-40 bg-[#212830] overflow-x-hidden flex flex-col justify-between gap-20">
      <Header />
      <div className="flex flex-col-1 lg:grid-cols-3 items-start gap-x-10">
        <div className="lg:col-span-1">
          <Profile />
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-6 justify-start">
            {repos.map((repo) => (
              <RepositoryCard key={repo.id} {...repo} />
            ))}
          </div>
        </div>
      </div>

      <footer className="w-full h-25 text-white font-semibold flex justify-center items-center bg-gradient-to-b from-[#212830] from-5% to-[#151B23] to-60%">
        <p>Made with ❤️ by Vivian Graton</p>
      </footer>
    </main>
  );
}
