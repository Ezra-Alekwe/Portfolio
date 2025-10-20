import React from "react";
import { IconProps } from "../../interface/interface";

function NewWindowSVG(props: IconProps) {
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
        viewBox="0 0 12 12"
      >
        <path
           fill={fill}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          strokeLinecap="round"
          d="M10.5 8.5V10c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h1.5M6 6l4-4m-3.5-.5H10c.3 0 .5.2.5.5v3.5"
          stroke-width="1"
        />
      </svg>
    </div>
  );
}

export default NewWindowSVG;
