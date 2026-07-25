import type { ProfileProps } from "@/app/components/Profile/types";
import type { Repository } from "@/app/components/RepositoryCard/types";

export interface UserContextType {
  profile: ProfileProps | null
  repos?: Repository[]
  isLoading?: boolean
  fetchUsername: (username: string) => Promise<void>
}