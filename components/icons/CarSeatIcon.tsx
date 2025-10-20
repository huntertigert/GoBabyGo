import React from 'react';

const CarSeatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 21a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0h1.5m9 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.5m-15 0h12.75a1.5 1.5 0 001.5-1.5v-2.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v2.25a1.5 1.5 0 001.5 1.5zM3.75 16.5v-4.5a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5m-16.5 0h16.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V9m0 3V6.75m-3.375 5.25V9m0 3V6.75m6.75 5.25V9m0 3V6.75M9.375 6.75h5.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75A2.25 2.25 0 019.75 6h4.5a2.25 2.25 0 012.25-2.25" />
    </svg>
);

export default CarSeatIcon;