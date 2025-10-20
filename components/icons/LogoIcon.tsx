import React from 'react';

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 80"
    fill="#367E4B"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Motion Lines */}
    <path d="M0 45 H25" stroke="#367E4B" strokeWidth="4" strokeLinecap="round" />
    <path d="M5 55 H30" stroke="#367E4B" strokeWidth="4" strokeLinecap="round" />
    <path d="M15 65 H35" stroke="#367E4B" strokeWidth="4" strokeLinecap="round" />

    {/* Stroller */}
    <path
      d="M40,55 C40,40 50,30 65,30 L90,30 C95,30 100,35 100,40 L100,60 C100,65 95,70 90,70 L45,70 C42,70 40,68 40,65 Z"
      fill="#367E4B"
    />
    
    {/* Stroller Handle */}
    <path
      d="M38,55 Q35,45 42,35"
      stroke="#367E4B"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
    />

    {/* Wheels */}
    <circle cx="58" cy="75" r="7" stroke="#367E4B" strokeWidth="4" fill="white" />
    <circle cx="82" cy="75" r="7" stroke="#367E4B" strokeWidth="4" fill="white" />
    <path d="M58 75 L82 75" stroke="#367E4B" strokeWidth="2" />
    <path d="M62 70 L78 80" stroke="#367E4B" strokeWidth="3" />
    <path d="M78 70 L62 80" stroke="#367E4B" strokeWidth="3" />

    {/* Baby */}
    <circle cx="78" cy="38" r="8" fill="white" />
    <path
      d="M70,30 C72,20 85,20 87,30 Q82,35 77,38 C75,35 70,33 70,30 Z"
      fill="#367E4B"
    />
    <circle cx="85" cy="22" r="3" fill="#367E4B" />
    
    {/* Baby eyes */}
    <path d="M75,38 Q77,40 79,38" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

export default LogoIcon;