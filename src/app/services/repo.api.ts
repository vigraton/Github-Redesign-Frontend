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

async function fetchUserRepos(username: string){
  try {
    const response = (await fetch(`https://api.github.com/users/${username}/repos`)).json()
    return response
  } catch (error) {
    throw error
  }
}

export const repoApi = { getRepos, fetchUserRepos };
