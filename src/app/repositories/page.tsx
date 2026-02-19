"use client";

import Header from "../components/Header/header";
import Profile from "../components/Profile/profile";
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
  const [loading, setLoading] = useState(false);

  const profile = {
    name: "Vivian Graton",
    username: "vigraton",
    followers: 11,
    following: 16,
    location: "SP, Brasil",
    company: "Valint Group Brasil",
  };

  async function getRepos() {
    const response = await api.get();
    setRepos(response);
    setLoading(false)
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 px-6">
        <div className="lg:col-span-1">
          <Profile {...profile} />
        </div>

        <div className="lg:col-span-2">
          {loading ? (
            <p className="text-white text-xs flex justify-center text-center">
              Carregando...
            </p>
          ) : repos.length === 0 ? (
            <p className="text-white text-xs flex justify-center text-center">
              Nada para ver aqui
            </p>
          ) : (
            <div className="flex flex-wrap gap-6 justify-start">
              {repos.map((repo) => (
                <RepositoryCard key={repo.id} responseData={repo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
