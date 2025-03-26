import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="animate-fade-in">
      <div className="animate-slide-up">
        {children}
      </div>
    </div>
  );
}