import { blogsData } from '../data/blogs';

export const fetchBlogs = async () => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogsData);
    }, 500);
  });
};
