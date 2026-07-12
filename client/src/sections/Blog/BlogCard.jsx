import React from 'react';

export const BlogCard = ({ blog }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    overflow: 'hidden',
    transition: 'all var(--transition-normal)',
    height: '100%'
  };

  const imageContainerStyle = {
    position: 'relative',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    backgroundColor: 'var(--bg-surface-subtle)'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform var(--transition-normal)'
  };

  const contentStyle = {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  };

  const metaStyle = {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.8rem',
    color: 'var(--text-subtle)',
    marginBottom: '0.5rem',
    fontWeight: '600'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '0.75rem',
    color: 'var(--text-primary)',
    lineHeight: '1.4'
  };

  return (
    <div style={cardStyle} className="blog-card glow-card reveal">
      <style>{`
        .blog-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }
        .blog-card:hover .blog-card-img {
          transform: scale(1.05);
        }
      `}</style>
      
      <div style={imageContainerStyle}>
        <img
          className="blog-card-img"
          style={imageStyle}
          src={blog.image}
          alt={`${blog.title} cover`}
          loading="lazy"
        />
      </div>

      <div style={contentStyle}>
        <div>
          <div style={metaStyle}>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          <h3 style={titleStyle}>{blog.title}</h3>
          
          <p style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            {blog.excerpt}
          </p>
        </div>

        <a
          href={blog.url}
          style={{
            fontWeight: '700',
            fontSize: '0.9rem',
            color: 'var(--color-accent)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            width: 'fit-content'
          }}
          className="blog-read-link"
        >
          Read Article
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
