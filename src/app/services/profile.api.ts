import axios from "axios"
import type { ProfileProps } from "../components/Profile/types";

const profileUrl = axios.create({
  baseURL: "https://api.github.com/users/vigraton",
})

async function getUser(){
  try {
    const response = profileUrl.get<ProfileProps>("", {
      headers: {
        "Authorization": `Bearer ${process.env.NODE_ENV}`
      }
    })

    return (await response).data
  } catch (error) {
    throw error
  }
}

async function getProfile() { // vou ignorar essa chamada por enquanto
  try {
    const response = await fetch("https://api.github.com/users/vigraton", {
      method: "GET",
      headers: { "X-GitHub-Api-Version": "2026-03-10" },
    });

    return response.json();
  } catch (error) {
    throw error;
  }
}

async function getAvatar() { // essa tbm >w<
  try {
    const response = await fetch(
      "https://avatars.githubusercontent.com/u/117688900?v=4",
      {
        method: "GET",
        headers: { "X-GitHub-Api-Version": "2026-03-10" },
      },
    );

    return response.json();
  } catch (error) {
    throw error;
  }
}

export const profileApi = { getAvatar, getProfile, getUser };
