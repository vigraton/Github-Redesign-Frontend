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

  async function getUsername(username: string){
    try {
      const response = profileApi.getUsername(username)
      return response
    } catch (error) {
      console.error("GET USERNAME ERROR: ", error)
      throw error
    }
  }

  return { getUser, getUsername };
}
