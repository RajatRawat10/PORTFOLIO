import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'rajatrawat10';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// In-memory cache store
const cache = {
  profile: { data: null, timestamp: 0 },
  repos: { data: null, timestamp: 0 },
  contributions: { data: null, timestamp: 0 }
};

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in ms

const isCacheValid = (cacheItem) => {
  return cacheItem.data && (Date.now() - cacheItem.timestamp < CACHE_DURATION);
};

// Helper to make github request
const githubRequest = async (url, options = {}) => {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
    ...options.headers
  };
  return axios({
    url,
    method: options.method || 'GET',
    headers,
    data: options.data
  });
};

// Route: Get GitHub profile
app.get('/api/github/profile', async (req, res) => {
  if (isCacheValid(cache.profile)) {
    return res.json(cache.profile.data);
  }

  try {
    const response = await githubRequest(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const data = {
      name: response.data.name,
      avatar_url: response.data.avatar_url,
      bio: response.data.bio,
      public_repos: response.data.public_repos,
      followers: response.data.followers,
      following: response.data.following,
      html_url: response.data.html_url,
      location: response.data.location,
      company: response.data.company,
      blog: response.data.blog
    };

    cache.profile = { data, timestamp: Date.now() };
    res.json(data);
  } catch (error) {
    console.error('Error fetching github profile:', error.message);
    // If rate limited or error, fallback to mock details
    res.status(error.response?.status || 500).json({
      message: 'Failed to fetch github profile',
      fallback: true,
      data: {
        name: 'Rajat Rawat',
        avatar_url: 'https://github.com/rajatrawat10.png',
        bio: 'Full Stack Engineer & Open Source Contributor',
        public_repos: 42,
        followers: 100,
        following: 50,
        html_url: `https://github.com/${GITHUB_USERNAME}`,
        location: 'India',
        company: 'Freelance',
        blog: ''
      }
    });
  }
});

// Route: Get GitHub repositories
app.get('/api/github/repos', async (req, res) => {
  if (isCacheValid(cache.repos)) {
    return res.json(cache.repos.data);
  }

  try {
    const response = await githubRequest(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`);
    // Filter out forks and sort by stars / updates
    const repos = response.data
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        topics: repo.topics || []
      }));

    cache.repos = { data: repos, timestamp: Date.now() };
    res.json(repos);
  } catch (error) {
    console.error('Error fetching github repos:', error.message);
    res.status(error.response?.status || 500).json({
      message: 'Failed to fetch github repos',
      fallback: true,
      data: []
    });
  }
});

// Route: Get GitHub contributions calendar
app.get('/api/github/contributions', async (req, res) => {
  if (isCacheValid(cache.contributions)) {
    return res.json(cache.contributions.data);
  }

  // Generate some high-quality mock contribution data if no token
  const generateMockContributions = () => {
    const data = [];
    const now = new Date();
    // 52 weeks * 7 days
    const totalDays = 364;
    for (let i = totalDays; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(now.getDate() - i);
      const count = Math.floor(Math.random() * 5); // 0 to 4 commits
      // Level matches GitHub colors
      // 0 = no commits, 4 = max commits
      data.push({
        date: date.toISOString().split('T')[0],
        count,
        level: count
      });
    }
    return {
      total: data.reduce((sum, d) => sum + d.count, 0),
      days: data
    };
  };

  if (!GITHUB_TOKEN) {
    const mockData = generateMockContributions();
    return res.json(mockData);
  }

  try {
    // GraphQL query for contribution calendar
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await axios({
      url: 'https://api.github.com/graphql',
      method: 'POST',
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      data: {
        query,
        variables: { username: GITHUB_USERNAME }
      }
    });

    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    const calendar = response.data.data.user.contributionsCollection.contributionCalendar;
    const days = [];
    calendar.weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        // Map color to level
        let level = 0;
        if (day.contributionCount > 0 && day.contributionCount < 3) level = 1;
        else if (day.contributionCount >= 3 && day.contributionCount < 6) level = 2;
        else if (day.contributionCount >= 6 && day.contributionCount < 9) level = 3;
        else if (day.contributionCount >= 9) level = 4;

        days.push({
          date: day.date,
          count: day.contributionCount,
          level
        });
      });
    });

    const data = {
      total: calendar.totalContributions,
      days
    };

    cache.contributions = { data, timestamp: Date.now() };
    res.json(data);
  } catch (error) {
    console.error('Error fetching github contributions:', error.message);
    // Return mock contributions if query fails
    res.json(generateMockContributions());
  }
});

// Base API route
app.get('/api', (req, res) => {
  res.json({ message: 'Portfolio Backend Service Active' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
