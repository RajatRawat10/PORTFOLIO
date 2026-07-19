import React from 'react';

export const SkillCard = ({ category }) => {
  return (
    <div className="skill-card-container glow-card reveal p-8 rounded-xl bg-bg-surf border border-border-main shadow-sm hover:-translate-y-1 hover:border-brand hover:shadow-md transition-all duration-300">
      <h3 className="m-0 text-xl font-bold border-b border-border-main pb-3">
        {category.category}
      </h3>

      <div className="flex flex-col gap-5 mt-6">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col gap-1.5">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-text-main">{skill.name}</span>
              <span className="text-brand">{skill.level}%</span>
            </div>
            <div className="w-full h-1.5 bg-bg-surf-subtle rounded-full overflow-hidden">
              <div 
                style={{ width: `${skill.level}%` }}
                className="h-full bg-brand rounded-full shadow-[0_0_8px_var(--glow-color)] transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
