import axios from "axios";
import type { Repository } from "../my-components/RepositoryCard/types";

const repoUrl = axios.create({
  baseURL: "https://api.github.com/users/vigraton/repos",
});

async function getRepos() {
  try {
    const response = (await repoUrl.get<Repository[]>("")).data;
    return response;
  } catch (error) {
    throw error;
  }
}

export const repoApi = { getRepos };
