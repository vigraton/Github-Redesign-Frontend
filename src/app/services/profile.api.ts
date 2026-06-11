import axios from "axios";
import { ProfileProps } from "../my-components/Profile/types";

const userUrl = axios.create({
  baseURL: "https://api.github.com/users/",
});

async function getUsername(username: string) {
  try {
    const response = (
      await userUrl.get<ProfileProps>(
        `${username}`,
        //   {
        //   headers: {
        //     Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        //   },
        // }
      )
    ).data;

    console.log("GET USERNAME RESPONSE: ", response);
    return response;
  } catch (error) {
    throw error;
  }
}

export const profileApi = { getUsername };
