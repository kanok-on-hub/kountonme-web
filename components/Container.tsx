import React from "react";

export const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
};
