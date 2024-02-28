'use client'
import React from "react";

const NotFoundPage: React.FC = () => {

  const handleGoBack = () => {
    window.history.back()
  }
  return (
    <div className="">
      <div className="w-fit h-fit mx-auto text-bluish-200 text-center">
        <h1 className="font-bold">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button onClick={handleGoBack} className="py-2 px-6 my-4 border border-bluish-200/10 rounded-md text-bluish-100">
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
