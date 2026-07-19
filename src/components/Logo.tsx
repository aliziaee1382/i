import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 400 120" 
      className={`${className} select-none`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Group to apply global italic slant/skew (-18deg) to match the 0003 logo image exactly */}
      <g 
        transform="skewX(-18) translate(30, 10)" 
        stroke="currentColor" 
        strokeWidth="15.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* FIRST 0: Fully closed */}
        <rect 
          x="10" 
          y="10" 
          width="65" 
          height="90" 
          rx="25" 
        />

        {/* SECOND 0: Stencil cut at the bottom-left vertical stroke */}
        <g mask="url(#stencil-cut-left-2)">
          <rect 
            x="95" 
            y="10" 
            width="65" 
            height="90" 
            rx="25" 
          />
        </g>

        {/* THIRD 0: Stencil cut at the bottom-left vertical stroke */}
        <g mask="url(#stencil-cut-left-3)">
          <rect 
            x="180" 
            y="10" 
            width="65" 
            height="90" 
            rx="25" 
          />
        </g>

        {/* FOURTH 3: Stencil cut on the top horizontal bar near the corner */}
        <g mask="url(#stencil-cut-3)">
          {/* Futuristic stencil 3 path */}
          <path 
            d="M 265 10 H 325 L 295 50 H 312 A 22.5 22.5 0 1 1 289.5 95 L 265 95"
          />
        </g>
      </g>

      <defs>
        {/* Mask for 2nd zero (cutout at bottom-left corner of the left side) */}
        <mask id="stencil-cut-left-2">
          <rect width="400" height="120" fill="white" />
          {/* Black rectangle to cut out the lower left segment */}
          <rect x="80" y="66" width="30" height="20" fill="black" />
        </mask>

        {/* Mask for 3rd zero (cutout at bottom-left corner of the left side) */}
        <mask id="stencil-cut-left-3">
          <rect width="400" height="120" fill="white" />
          {/* Black rectangle to cut out the lower left segment */}
          <rect x="165" y="66" width="30" height="20" fill="black" />
        </mask>

        {/* Mask for the '3' (cutout on top bar) */}
        <mask id="stencil-cut-3">
          <rect width="400" height="120" fill="white" />
          {/* Black rectangle to cut a gap on the top right bar of 3 */}
          <rect x="306" y="0" width="16" height="25" fill="black" />
        </mask>
      </defs>
    </svg>
  );
}
