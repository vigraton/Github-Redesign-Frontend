// Contexto para puxar as informações do perfil do usuário (email, seguidores, login etc.)
// e listar os repositórios deste usuário

"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { ProfileProps } from "../components/Profile/types";
import type { UserContextType } from "./types";
import { profileApi } from "../services/profile.api";

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsername(username?: string) {
    if (!username) return
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

  return (
    <UserContext.Provider
      value={{ isLoading, profile: profile!, fetchUsername }}>
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
