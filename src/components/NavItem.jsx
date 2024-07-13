import React from "react";

function NavItem({ icon, text, isActive }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem",
        borderBottom: isActive ? "2px solid black" : "none",
      }}
    >
      <svg
        stroke="currentColor"
        xmlns="https://www.w3.org/2000/svg"
        fill="currentColor"
        strokeWidth="0"
        height="2rem"
        width="1.5rem"
        viewBox="0 0 24 24"
        style={{ fill: isActive ? "black" : "gray" }}
      >
        <path fill="none" d="M 0 0 h 24 v 24 H 0 Z"></path>
        {icon}
      </svg>
      <span
        style={{
          fontWeight: isActive ? "600" : "500",
          color: isActive ? "black" : "gray",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default NavItem;
