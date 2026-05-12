async function getMyRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/vigraton/repos",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const api = { get: getMyRepos };
