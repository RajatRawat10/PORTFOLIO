import { useState, useEffect } from 'react';
import { fetchGithubProfile, fetchGithubRepos, fetchGithubContributions } from '../services/githubApi';

export const useGithubData = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [contributions, setContributions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const [profileData, reposData, contributionsData] = await Promise.all([
          fetchGithubProfile(),
          fetchGithubRepos(),
          fetchGithubContributions()
        ]);
        
        setProfile(profileData);
        setRepos(reposData);
        setContributions(contributionsData);
      } catch (err) {
        console.error('Failed to load GitHub data:', err);
        setError(err.message || 'Failed to load GitHub data');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { profile, repos, contributions, loading, error };
};
export default useGithubData;
