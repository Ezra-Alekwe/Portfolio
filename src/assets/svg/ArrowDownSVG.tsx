import React from "react";
import { IconProps } from "../../interface/interface";

function ArrowDownSVG(props: IconProps) {
  const { width = 12, height= 12, fill ='none',strokeWidth=2 } = props;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        width={width}
        height={height}
      >
        <path
          fill={fill}

          stroke="currentColor"
          strokeWidth={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M112 268l144 144 144-144M256 392V100"
        />
      </svg>
    </div>
  );
}

export default ArrowDownSVG;
