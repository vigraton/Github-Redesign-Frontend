export interface ProfileProps {
  name: string;
  login: string;
  avatar_url?: string;
  followers: number | null;
  following: number | null;
  location?: string | null;
  company?: string | null;
  bio?: string | null;
  twitter_username?: string;
  email?: string | null;
  blog?: string | null;
}
