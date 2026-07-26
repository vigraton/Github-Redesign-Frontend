async function getUsername(username: string) {
  try {
    const response = (await fetch(`https://api.github.com/users/${username}`)).json();
    return response
  } catch (error) {
    throw error;
  }
}

export const profileApi = { getUsername };
