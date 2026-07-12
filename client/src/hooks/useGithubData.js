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
          fetchGithubProfile().catch(err => {
            console.error('Failed to load GitHub profile:', err);
            return null;
          }),
          fetchGithubRepos().catch(err => {
            console.error('Failed to load GitHub repos:', err);
            return [];
          }),
          fetchGithubContributions().catch(err => {
            console.error('Failed to load GitHub contributions:', err);
            return null;
          })
        ]);
        
        setProfile(profileData);
        setRepos(reposData);
        setContributions(contributionsData);

        // Only block with error screen if both critical endpoints failed
        if (!profileData && (!reposData || reposData.length === 0)) {
          setError('Could not retrieve details from GitHub API.');
        }
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
