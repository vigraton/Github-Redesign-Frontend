"use client";

import Header from "../components/Header/header";
import Profile from "../components/Profile/profile";
import RepositoryCard from "../components/RepositoryCard/card";
import { useEffect, useState } from "react";

// Tipo de dados que vêm do back
type Repo = {
  id: number;
  name: string;
  language: string;
  updateAt: string;
  private: boolean;
};

// Função para buscar repositórios
async function getMyRepos() {
  try {
    const response = await fetch("https://api.github.com/users/vigraton/repos", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Erro http:${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

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

  // Busca repos quando o componente monta
  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      const data = await getMyRepos();
      setRepos(data);
      setLoading(false);
    }
    fetchRepos();
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
            <p>Carregando...</p>
          ) : repos.length === 0 ? (
            <p>Nada para ver aqui</p>
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
