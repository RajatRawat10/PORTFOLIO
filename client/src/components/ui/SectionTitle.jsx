import React from 'react';

export const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 flex flex-col ${centered ? 'text-center items-center' : 'text-left items-start'}`}>
      <h2 className="relative font-extrabold text-text-main mb-2">
        {title}
        <span className={`block w-[60px] h-[4px] bg-brand rounded-full mt-2 ${centered ? 'mx-auto' : 'mx-0'}`}></span>
      </h2>
      {subtitle && (
        <p className="text-text-muted text-[clamp(1rem,0.95rem+0.25vw,1.25rem)] max-w-[600px] mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
