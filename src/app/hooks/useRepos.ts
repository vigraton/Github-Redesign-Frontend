import { repoApi } from "../services/repo.api";
import type { Repository } from "../my-components/RepositoryCard/types";
import { useState } from "react";

export function useRepos() {
  const [repos, setRepos] = useState<Repository[]>([]);

  async function getRepos() {
    try {
      const response = await repoApi.getRepos();
      setRepos(response);
    } catch (error) {
      console.error("GET REPOS ERROR: ", error);
      throw error;
    }
  }

  return { getRepos, repos };
}
