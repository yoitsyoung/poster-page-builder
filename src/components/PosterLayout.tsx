
import React, { ReactNode } from 'react';

interface PosterLayoutProps {
  children: ReactNode;
}

const PosterLayout = ({ children }: PosterLayoutProps) => {
  return (
    <>
      <div className="poster-background"></div>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
        <div className="max-w-md w-full text-center text-white">
          {children}
        </div>
      </div>
    </>
  );
};

export default PosterLayout;
