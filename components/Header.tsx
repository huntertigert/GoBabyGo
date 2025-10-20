import React from 'react';
import LogoIcon from './icons/LogoIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <LogoIcon className="h-10 w-10" />
        <h1 className="ml-3 text-2xl font-bold tracking-tight">
          <span className="text-green-600">Go</span>
          <span className="text-slate-800">BabyGo</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;