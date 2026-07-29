export interface ProfileProps {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  followers: number | null;
  following: number | null;
  location: string | null;
  company: string | null;
  public_repos: number | null;
  blog: string | null;
}
