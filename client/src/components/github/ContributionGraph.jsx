import { useMemo } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { personalInfo } from '../../data/personalInfo';
import './ContributionGraph.css';

export const ContributionGraph = () => {
  // 1. Safely extract/memoize username from personalInfo to prevent runtime errors
  const username = useMemo(() => {
    try {
      if (!personalInfo || typeof personalInfo.github !== 'string') {
        return 'rajatrawat10';
      }
      const url = personalInfo.github.trim();
      if (!url) return 'rajatrawat10';
      
      const cleanUrl = url.replace(/\/+$/, '').split('?')[0];
      const parts = cleanUrl.split('/');
      const parsed = parts[parts.length - 1];
      
      return parsed && parsed !== 'github.com' ? parsed : 'rajatrawat10';
    } catch (e) {
      console.error('Error parsing GitHub URL, using fallback:', e);
      return 'rajatrawat10';
    }
  }, []);

  // 2. Memoize custom theme array using CSS design variables
  const themeColors = useMemo(() => [
    'var(--contrib-color-0)',
    'var(--contrib-color-1)',
    'var(--contrib-color-2)',
    'var(--contrib-color-3)',
    'var(--contrib-color-4)'
  ], []);

  const customTheme = useMemo(() => ({
    light: themeColors,
    dark: themeColors
  }), [themeColors]);

  // 3. Define fallback UI element when calendar fetching fails
  const errorFallback = useMemo(() => (
    <div className="calendar-error-container" role="alert">
      <p className="calendar-error-message">Failed to load GitHub activity grid</p>
      <p className="calendar-error-subtext">
        Check that the GitHub username "{username}" is valid, or check your internet connection.
      </p>
    </div>
  ), [username]);

  return (
    <div 
      className="contribution-graph-card"
      role="region"
      aria-label="GitHub contributions tracker"
    >
      <h4 className="contribution-graph-title">GitHub Contributions</h4>
      
      <div 
        className="calendar-scrollbar-wrapper"
        tabIndex="0"
        role="group"
        aria-label="GitHub contributions calendar grid. Use arrow keys to scroll."
      >
        <GitHubCalendar 
          username={username}
          theme={customTheme}
          throwOnError={false}
          errorMessage={errorFallback}
        />
      </div>
    </div>
  );
};

export default ContributionGraph;
