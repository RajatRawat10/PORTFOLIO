import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import GitHubCalendar from "react-github-calendar";
export const ContributionGraph = () => {
  // Parse username from personal info URL
  const githubUrl = personalInfo.github || 'https://github.com/rajatrawat10';
  const username = githubUrl.split('/').pop() || 'rajatrawat10';

  const containerStyle = {
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  // Explicit HSL themes matching the portfolio's blue palette
  const customTheme = {
    light: [
      'hsl(206, 50%, 94%)', // #E5EFF6 (Light base)
      'hsl(206, 49%, 80%)', // #B3CFE5 (Ice blue)
      'hsl(206, 39%, 60%)', // Steel light
      'hsl(206, 39%, 47%)', // #4A7FA7 (Medium steel blue)
      'hsl(217, 66%, 12%)'  // #0A1931 (Deep navy)
    ],
    dark: [
      'hsl(217, 50%, 22%)', // Dark base surface subtle
      'hsl(211, 56%, 25%)', // #1A3D63 (Dark steel blue)
      'hsl(206, 39%, 47%)', // #4A7FA7 (Medium steel blue)
      'hsl(206, 49%, 70%)', // Ice steel
      'hsl(206, 49%, 80%)'  // #B3CFE5 (Ice blue accent)
    ]
  };

  return (
    <div style={containerStyle} className="contribution-graph-card">
      <h4 style={{ margin: 0, fontWeight: '700', fontSize: '1.1rem' }}>GitHub Contributions</h4>
      
      <div style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }} className="calendar-scrollbar-wrapper">
        <style>{`
          .calendar-scrollbar-wrapper svg {
            max-width: 100%;
            height: auto;
          }
          .react-activity-calendar {
            width: 100%;
            color: var(--text-primary);
          }
          .react-activity-calendar__legend, 
          .react-activity-calendar__label {
            fill: var(--text-subtle) !important;
            color: var(--text-subtle) !important;
          }
        `}</style>
        <GitHubCalendar 
          username={username}
          theme={customTheme}
          hideColorLegend={false}
          hideTotalCount={false}
          hideMonthLabels={false}
        />
      </div>
    </div>
  );
};

export default ContributionGraph;
