// LoadingSpinner.js
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#000" // Change color if needed
          strokeWidth="4"
          strokeLinecap="round"
          className="opacity-25"
        />
        <path
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          fill="#000" // Change color if needed
          className="opacity-75"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
