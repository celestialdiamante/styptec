import React from 'react';

interface PageHeaderProps {
  title: string;
  className?: string; 
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-teal-300 via-green-200 to-amber-200 lg:h-[300px] h-auto ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-16 max-w-2xl text-center mx-auto">
          <h1 className="font-bold text-gray-950 justify-center text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            <span className="">
              {title}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
