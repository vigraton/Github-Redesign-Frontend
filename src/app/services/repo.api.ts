import axios from "axios";
import type { Repository } from "../components/RepositoryCard/types";

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

async function getMyRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/vigraton/repos",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const repoApi = { get: getMyRepos, getRepos };
