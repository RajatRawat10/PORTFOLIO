import SectionTitle from '../../components/ui/SectionTitle';
import Loader from '../../components/ui/Loader';
import GithubStats from '../../components/github/GithubStats';
import ContributionGraph from '../../components/github/ContributionGraph';
import RepoCard from '../../components/github/RepoCard';
import useGithubData from '../../hooks/useGithubData';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './GithubDashboard.css';

export const GithubDashboard = () => {
  const containerRef = useScrollAnimation();
  const { profile, repos, contributions, loading, error } = useGithubData();

  return (
    <section id="github" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="GitHub Activity"
          subtitle="Real-time open source statistics and project repositories fetched securely via backend proxy."
        />

        <div className="github-dashboard-container reveal">
          <ContributionGraph />

          {loading ? (
            <Loader type="spinner" />
          ) : error ? (
            <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', color: 'var(--text-subtle)' }}>
              <p style={{ margin: 0, fontWeight: '600' }}>Could not load additional GitHub stats: {error}</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginInline: 'auto', maxWidth: '500px' }}>
                Ensure your backend Express server is running, or that your GITHUB_TOKEN is correct.
              </p>
            </div>
          ) : (
            <>
              {profile && (
                <GithubStats
                  profile={profile}
                  totalContributions={contributions?.total || 0}
                />
              )}

              {repos && repos.length > 0 && (
                <>
                  <h3 className="repos-section-title">Featured Repositories</h3>
                  <div className="github-repos-grid">
                    {repos.map((repo) => (
                      <RepoCard key={repo.id} repo={repo} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GithubDashboard;
