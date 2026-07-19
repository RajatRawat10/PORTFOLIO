import React from 'react';

export const ExperienceCard = ({ exp }) => {
  return (
    <div className="group relative mb-10 timeline-item reveal">
      <div className="absolute left-[-2.7rem] top-8 w-4 h-4 rounded-full bg-brand border-[4px] border-bg-main z-20 shadow-[0_0_10px_var(--glow-color)]" />
      <div className="exp-card glow-card relative p-8 rounded-xl bg-bg-surf border border-border-main shadow-sm ml-8 transition-all duration-300 group-hover:translate-x-1 group-hover:border-brand group-hover:shadow-md">
        <div className="flex justify-between flex-wrap gap-2 mb-4">
          <div>
            <h3 className="m-0 text-xl font-bold">{exp.role}</h3>
            <span className="text-[1rem] text-brand font-semibold">{exp.company}</span>
          </div>
          <span className="text-[0.85rem] font-semibold text-text-muted px-3 py-1 bg-bg-surf-subtle rounded-full h-fit">
            {exp.duration}
          </span>
        </div>
        {Array.isArray(exp.description) ? (
          <ul className="m-0 pl-5 text-[0.95rem] text-text-muted leading-relaxed list-disc">
            {exp.description.map((bullet, idx) => (
              <li key={idx} className="mb-2">{bullet}</li>
            ))}
          </ul>
        ) : (
          <p className="m-0 text-[0.95rem] text-text-muted leading-relaxed">
            {exp.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
