import React from 'react';

const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m0 0h.022m-2.25 0l-1.94-1.94a1.5 1.5 0 010-2.122l1.94-1.94a1.5 1.5 0 012.122 0l1.94 1.94a1.5 1.5 0 010 2.122l-1.94 1.94m-2.25 0h2.25" />
  </svg>
);

export default TrophyIcon;
