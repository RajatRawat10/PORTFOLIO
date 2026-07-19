import React from 'react';

export const GithubStats = ({ profile, totalContributions }) => {
  if (!profile) return null;

  const stats = [
    {
      label: "Public Repositories",
      value: profile.public_repos,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      label: "Total Contributions",
      value: totalContributions || 0,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    },
    {
      label: "Followers",
      value: profile.followers,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 w-full github-stats-grid">
      {stats.map((stat, idx) => (
        <div key={idx} className="github-stat-card glow-card flex items-center gap-5 p-6 rounded-xl bg-bg-surf border border-border-main shadow-sm">
          <div className="text-brand p-2 rounded-sm bg-glow-custom">
            {stat.icon}
          </div>
          <div>
            <div className="text-3xl font-extrabold leading-none">{stat.value}</div>
            <div className="text-[0.85rem] text-text-muted mt-1 font-semibold">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GithubStats;
