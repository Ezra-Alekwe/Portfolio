import React from "react";
import { IconProps } from "../../interface/interface";

function MenuSVG(props: IconProps) {
  const {
    width = 12,
    height = 12,
    fill = "none",
    strokeWidth = 1.2,
    strokeColor = "#808080",
  } = props;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <path
          fill={fill}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
        />
      </svg>
    </div>
  );
}

export default MenuSVG;
