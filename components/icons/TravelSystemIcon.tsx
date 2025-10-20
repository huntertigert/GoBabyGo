import React from 'react';

const TravelSystemIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        {/* Stroller part */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H6.375a1.125 1.125 0 01-1.125-1.125V16.5m1.125 2.25h1.125m12 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h-2.25a1.125 1.125 0 01-1.125-1.125V16.5m1.125 2.25h-1.125" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 16.5l-3-3m0 0l-3 3m3-3v3.75" />
        {/* Car seat part on top */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75h-7.5a1.5 1.5 0 00-1.5 1.5v2.25a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5V8.25a1.5 1.5 0 00-1.5-1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3.75A2.25 2.25 0 0012.75 6H11.25A2.25 2.25 0 009 3.75" />
    </svg>
);

export default TravelSystemIcon;