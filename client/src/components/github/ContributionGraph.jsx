import { useMemo } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { personalInfo } from '../../data/personalInfo';

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
    <div className="flex flex-col items-center justify-center p-8 text-center bg-bg-surf-subtle rounded-xl border border-border-main text-text-muted w-full box-border" role="alert">
      <p className="m-0 font-semibold text-text-main">Failed to load GitHub activity grid</p>
      <p className="text-sm mt-2 max-w-[500px]">
        Check that the GitHub username "{username}" is valid, or check your internet connection.
      </p>
    </div>
  ), [username]);

  return (
    <div 
      className="p-8 rounded-xl bg-bg-surf border border-border-main shadow-sm w-full flex flex-col gap-6 box-border"
      role="region"
      aria-label="GitHub contributions tracker"
    >
      <h4 className="m-0 font-bold text-lg text-text-main">GitHub Contributions</h4>
      
      <div 
        className="w-full overflow-x-auto flex justify-center outline-none rounded-sm focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4"
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
