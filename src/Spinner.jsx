import React from "react";
import "./Spinner.css"; // Import the CSS file for spinner styles

export default function Spinner() {
  return (
    <div className="  flex justify-center items-center h-full space-x-2">
      <div className="dot-pulse"></div>
      <div className="dot-pulse"></div>
      <div className="dot-pulse"></div>
    </div>
  );
}
