/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Caret = ({ className }) => {
  return (
    <svg
      className={`caret ${className}`}
      fill="none"
      height="10"
      viewBox="0 0 25 10"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M6 2L15 8L24 2" stroke="black" strokeWidth="3" />
    </svg>
  );
};
