import React from 'react';

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader = ({ title, className = '' }: PageHeaderProps) => {
  return (
    <div className={`bg-gradient-to-r from-teal-300 via-green-200 to-amber-200 lg:h-[300px] h-[150px] ${className}`}>
      {/*  */}
      {/* bg-[url('/images/Banner01.webp')] bg-cover bg-no-repeat  */}
    <div className="container flex justify-center items-center h-full">
      <h1 className="text-center font-bold text-gray-950 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
        {title}
      </h1>
    </div>
  </div>
  
  );
}

export default PageHeader;
