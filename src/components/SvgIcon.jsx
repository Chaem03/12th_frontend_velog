import React from "react";

function SvgIcon({ icon, color = "currentColor", size = "2rem", ...props }) {
  return (
    <svg
      stroke={color}
      fill={color}
      strokeWidth="0"
      height={size}
      width={size}
      xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      {icon}
    </svg>
  );
}

export default SvgIcon;
