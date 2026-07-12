const API_BASE = import.meta.env.VITE_API_URL || '';

export const fetchGithubProfile = async () => {
  const response = await fetch(`${API_BASE}/api/github/profile`);
  if (!response.ok) {
    throw new Error('Failed to fetch github profile');
  }
  return response.json();
};

export const fetchGithubRepos = async () => {
  const response = await fetch(`${API_BASE}/api/github/repos`);
  if (!response.ok) {
    throw new Error('Failed to fetch github repositories');
  }
  return response.json();
};

export const fetchGithubContributions = async () => {
  const response = await fetch(`${API_BASE}/api/github/contributions`);
  if (!response.ok) {
    throw new Error('Failed to fetch github contributions');
  }
  return response.json();
};
