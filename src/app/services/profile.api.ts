async function getProfile() {
  try {
    const response = await fetch("https://api.github.com/users/vigraton", {
      method: "GET",
      headers: { "X-GitHub-Api-Version": "2026-03-10" },
    });

    return response.json();
  } catch (error) {
    throw error;
  }
}

async function getAvatar() {
  try {
    const response = await fetch(
      "https://avatars.githubusercontent.com/u/117688900?v=4",
      {
        method: "GET",
        headers: { "X-GitHub-Api-Version": "2026-03-10" },
      },
    );

    return response.json();
  } catch (error) {
    throw error;
  }
}

export const profileApi = { getAvatar, getProfile };
