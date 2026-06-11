export interface ProfileProps {
  name: string;
  login: string;
  avatar_url?: string;
  followers: number | null;
  following: number | null;
  location?: string | null;
  company?: string | null;
  email?: string | null;
}
