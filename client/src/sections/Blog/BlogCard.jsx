import React from 'react';

export const BlogCard = ({ blog }) => {
  return (
    <div className="group blog-card glow-card reveal flex flex-col rounded-xl bg-bg-surf border border-border-main shadow-sm overflow-hidden hover:-translate-y-1.5 hover:border-brand hover:shadow-md transition-all duration-300 h-full">
      <div className="relative aspect-[16/9] overflow-hidden bg-bg-surf-subtle">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={blog.image}
          alt={`${blog.title} cover`}
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex gap-4 text-[0.8rem] text-text-muted mb-2 font-semibold">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          <h3 className="m-0 text-lg font-bold mb-3 text-text-main leading-snug">{blog.title}</h3>
          
          <p className="text-sm text-text-muted mb-6 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        <a
          href={blog.url}
          className="font-bold text-sm text-brand inline-flex items-center gap-1 w-fit hover:translate-x-0.5 transition-transform"
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
