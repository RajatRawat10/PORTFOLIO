import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -100px 0px', // trigger slightly before entering fully
      threshold: 0.1,
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we can unobserve if we want it to stay permanent
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const container = containerRef.current;
    if (container) {
      // Find all child elements with the 'reveal' class
      const revealElements = container.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
      
      // If the container itself has 'reveal', observe it too
      if (container.classList.contains('reveal')) {
        observer.observe(container);
      }
    }

    return () => {
      if (container) {
        const revealElements = container.querySelectorAll('.reveal');
        revealElements.forEach((el) => observer.unobserve(el));
        if (container.classList.contains('reveal')) {
          observer.unobserve(container);
        }
      }
    };
  }, [options]);

  return containerRef;
};

export default useScrollAnimation;
