// Wrapper to resolve the missing default export in react-github-calendar v5+ ESM builds
import { GitHubCalendar } from '../../node_modules/react-github-calendar/build/index.js';

export default GitHubCalendar;
export * from '../../node_modules/react-github-calendar/build/index.js';
