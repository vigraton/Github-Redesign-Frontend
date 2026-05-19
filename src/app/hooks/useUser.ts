import { profileApi } from "../services/profile.api";

export function useUser() {
  async function getUser() {
    try {
      const response = profileApi.getUser();
      return await response;
    } catch (error) {
      console.error("GET USER ERROR: ", error);
      throw error;
    }
  }

  return { getUser };
}
