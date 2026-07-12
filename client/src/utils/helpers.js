/**
 * Truncate a string to a specific length and append an ellipsis.
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Format date string to standard readable format.
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Merge CSS classes conditionally.
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
