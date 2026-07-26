"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ProfileProps } from "../components/Profile/types";
import type { Repository } from "../components/RepositoryCard/types";
import type { UserContextType } from "./types";
import { profileApi } from "../services/profile.api";

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsername(username?: string) {
    if (!username) return;
    setIsLoading(true);
    try {
      const response = await profileApi.getUsername(username!);
      setProfile(response);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchUserRepos(username: string) {
    setIsLoading(true);
    try {
      await fetchUsername(username)
      const response = await profileApi.getUserRepos(username);
      console.log("REPOS RESPONSE: ", response)

      setRepos(response);
      return response;

    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ isLoading, profile: profile!, fetchUsername, fetchUserRepos, repos: repos }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used whithin an UserProvider");
  }
  return context;
}
