import SectionTitle from '../../components/ui/SectionTitle';
import Loader from '../../components/ui/Loader';
import GithubStats from '../../components/github/GithubStats';
import ContributionGraph from '../../components/github/ContributionGraph';
import RepoCard from '../../components/github/RepoCard';
import useGithubData from '../../hooks/useGithubData';
import useScrollAnimation from '../../hooks/useScrollAnimation';

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

        <div className="flex flex-col gap-8 w-full reveal">
          <ContributionGraph />

          {loading ? (
            <Loader type="spinner" />
          ) : error ? (
            <div className="p-8 text-center bg-bg-surf-subtle rounded-xl border border-border-main text-text-muted">
              <p className="m-0 font-semibold">Could not load additional GitHub stats: {error}</p>
              <p className="text-sm mt-2 mx-auto max-w-[500px]">
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
                  <h3 className="mt-6 text-2xl font-bold text-text-main">Featured Repositories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 w-full">
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
