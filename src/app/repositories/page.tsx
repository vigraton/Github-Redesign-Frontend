"use client";

import Header from "../components/Header/header";
import Profile from "../components/Profile/profile";
import type { ProfileProps } from "../components/Profile/types";
import { profileApi } from "../services/profile.api";
import RepositoryCard from "../components/RepositoryCard/card";
import { useEffect, useState } from "react";
import { api } from "../services/repo.api";

type Repo = {
  id: number;
  name: string;
  language: string;
  updateAt: string;
  private: boolean;
};

export default function RepositoriesPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setLoading] = useState(false);
  const profile: ProfileProps = {
    name: "",
    login: "",
    avatar_url: "",
    company: "",
    followers: undefined,
    following: undefined,
    location:""
  }

  async function getRepos() {
    setLoading(true);
    try {
      const response = await api.get();
      setRepos(response);
      setLoading(false);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
        <div className="lg:col-span-1">
          <Profile {...profile} />
        </div>

        <div className="lg:col-span-2">
          {isLoading ? (
            <p className="text-white text-xs flex justify-center text-center">
              Carregando...
            </p>
          ) : (
          <div className="flex flex-wrap gap-6 justify-start">
            {repos.map((repo) => (
              <RepositoryCard key={repo.id} data={repo} />
            ))}
          </div>
          )}
        </div>
      </div>
    </>
  );
}
