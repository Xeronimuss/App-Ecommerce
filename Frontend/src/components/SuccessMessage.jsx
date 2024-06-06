import React from 'react';

const SuccessMessage = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 left-4 z-50 m-2 my-8 max-w-sm rounded-lg border border-gray-100 bg-white px-12 py-6 shadow-md">
    <button onClick={onClose} className="absolute top-0 right-0 p-4 text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <p className="relative mb-1 text-sm font-medium">
      <span className="absolute -left-7 flex h-5 w-5 items-center justify-center rounded-xl bg-green-400 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 w-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
      <span className="text-gray-700">{message}</span>
    </p>
  </div>
  );
};

export default SuccessMessage;
