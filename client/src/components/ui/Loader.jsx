import React from 'react';

export const Loader = ({ type = 'spinner' }) => {
  if (type === 'skeleton') {
    return (
      <div className="grid gap-4 w-full">
        <div className="shimmer-effect h-10 rounded-sm w-[60%]"></div>
        <div className="shimmer-effect h-5 rounded-sm w-full"></div>
        <div className="shimmer-effect h-5 rounded-sm w-[90%]"></div>
        <div className="shimmer-effect h-5 rounded-sm w-[40%]"></div>
      </div>
    );
  }

  // Default: Spinner
  return (
    <div className="flex justify-center items-center min-h-[200px] w-full">
      <div 
        className="w-12 h-12 border-4 border-bg-surf-subtle border-t-brand rounded-full animate-spin my-12"
        aria-label="Loading content"
      ></div>
    </div>
  );
};

export default Loader;
