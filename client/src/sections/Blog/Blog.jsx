import React, { useState, useEffect } from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import BlogCard from './BlogCard';
import Loader from '../../components/ui/Loader';
import { fetchBlogs } from '../../services/blogApi';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Blog = () => {
  const containerRef = useScrollAnimation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  return (
    <section id="blog" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="Latest Articles"
          subtitle="Thoughts, tutorials, and insights on modern web technologies and development practices."
        />

        {loading ? (
          <Loader type="spinner" />
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-10 w-full blogs-grid">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
