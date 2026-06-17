import { profileApi } from "../services/profile.api";

export function useUser() {
  async function getUser() {
    try {
      const response = await profileApi.getProfile();
      return response;
    } catch (error) {
      console.error("GET PROFILE ERROR: ", error);
      throw error;
    }
  }

  return { getUser };
}
