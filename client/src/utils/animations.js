// Standardized transition and anim presets
export const slideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const hoverScaleEffect = {
  whileHover: { scale: 1.03, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 }
};
