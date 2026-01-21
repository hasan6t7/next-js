
import React from "react";

const loading = () => {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  );
};

export default loading;
