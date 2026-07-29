async function getUsername(username: string) {
  try {
    const response = (
      await fetch(`https://api.github.com/users/${username}`)
    ).json();
    return response;
  } catch (error) {
    throw error;
  }
}

async function getUserRepos(username: string) {
  try {
    const response = (
      await fetch(`https://api.github.com/users/${username}/repos`, {
        method: "GET",
      })
    ).json();
    return response;
  } catch (error) {
    throw error;
  }
}

export const profileApi = { getUsername, getUserRepos };
