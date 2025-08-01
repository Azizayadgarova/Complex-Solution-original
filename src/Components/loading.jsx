// components/LoadingOverlay.jsx
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="w-16 h-15 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
