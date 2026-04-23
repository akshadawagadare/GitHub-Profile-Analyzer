const BASE_URL = "https://api.github.com/users";

const request = async (endpoint) => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    // Handle specific errors first
    if (response.status === 404) {
      throw new Error("GitHub user not found");
    }

    if (response.status === 403) {
      throw new Error("Too many requests. Please try again later.");
    }

    //Handle other errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const message = errorData?.message || "Something went wrong";
      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    // Network or unexpected error
    throw new Error(error.message || "Network error occurred");
  }
};

// -----------------------------

export const getUserProfile = async (username) => {
  if (!username?.trim()) {
    throw new Error("Username is required");
  }

  return request(`${BASE_URL}/${username}`);
};

export const getUserRepos = async (username) => {
  if (!username?.trim()) {
    throw new Error("Username is required");
  }

  return request(
    `${BASE_URL}/${username}/repos?per_page=100&sort=updated`
  );
};

export const getCompleteUserData = async (username) => {
  try {
    const [profile, repos] = await Promise.all([
      getUserProfile(username),
      getUserRepos(username),
    ]);

    return { profile, repos };
  } catch (error) {
    throw new Error(error.message);
  }
};