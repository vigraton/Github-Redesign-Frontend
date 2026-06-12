import { profileApi } from "../services/profile.api";

export function useUser() {
  async function getUsername(username: string) {
    try {
      const response = profileApi.getUsername(username);
      return response;
    } catch (error) {
      console.error("GET USERNAME ERROR: ", error);
      throw error;
    }
  }

  return { getUsername };
}
