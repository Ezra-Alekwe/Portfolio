import React from "react";
import { IconProps } from "../../interface/interface";

function LinkedInSVG(props: IconProps) {
  const { width = 12, height = 12, fill = "none", strokeWidth = 2,strokeColor='#808080' } = props;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <g
          fill={fill}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </g>
      </svg>
    </div>
  );
}

export default LinkedInSVG;
