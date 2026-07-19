import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import { personalInfo } from '../../data/personalInfo';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const About = () => {
  const containerRef = useScrollAnimation();

  return (
    <section id="about" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="Get to know my background, experience, and what drives me as a software developer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start reveal">
          <div className="flex flex-col">
            <p className="text-[1.05rem] leading-[1.7] text-text-muted mb-8">
              {personalInfo.bio}
            </p>
            
            <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 mb-8 p-6 rounded-xl border border-border-main bg-bg-surf">
              <span className="font-bold text-text-main">Name:</span>
              <span className="text-text-muted">{personalInfo.name}</span>
              
              <span className="font-bold text-text-main">Email:</span>
              <span className="text-text-muted">{personalInfo.email}</span>
              
              <span className="font-bold text-text-main">Location:</span>
              <span className="text-text-muted">India</span>
              
              <span className="font-bold text-text-main">Specialty:</span>
              <span className="text-text-muted">{personalInfo.title}</span>
            </div>

            <Button variant="primary" href={personalInfo.resumeUrl} download className="self-start">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-bg-surf-subtle border border-border-main text-center hover:border-brand hover:bg-bg-surf hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-extrabold text-brand leading-[1.1] mb-2">1+</div>
              <div className="text-[0.85rem] font-semibold text-text-muted uppercase tracking-[1px]">Years Experience</div>
            </div>
            <div className="p-6 rounded-xl bg-bg-surf-subtle border border-border-main text-center hover:border-brand hover:bg-bg-surf hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-extrabold text-brand leading-[1.1] mb-2">10+</div>
              <div className="text-[0.85rem] font-semibold text-text-muted uppercase tracking-[1px]">Projects Completed</div>
            </div>
            <div className="p-6 rounded-xl bg-bg-surf-subtle border border-border-main text-center hover:border-brand hover:bg-bg-surf hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-extrabold text-brand leading-[1.1] mb-2">5+</div>
              <div className="text-[0.85rem] font-semibold text-text-muted uppercase tracking-[1px]">Live Modules</div>
            </div>
            <div className="p-6 rounded-xl bg-bg-surf-subtle border border-border-main text-center hover:border-brand hover:bg-bg-surf hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-extrabold text-brand leading-[1.1] mb-2">500+</div>
              <div className="text-[0.85rem] font-semibold text-text-muted uppercase tracking-[1px]">Git Commits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
