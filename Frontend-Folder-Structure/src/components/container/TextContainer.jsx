/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextContainer = ({
  className,
  divClassName,
  text = "Container with Words",
  divClassNameOverride,
  divClassName1,
  lineClassName,
  line = "https://c.animaapp.com/6LZYVBLH/img/line-2-1.svg",
}) => {
  return (
    <div className={`component ${className}`}>
      <div className={`container-with-words ${divClassName}`}>{text}</div>
      <div className={`text-wrapper ${divClassNameOverride}`}>
        hahahihi
      </div>
      <div className={`div ${divClassName1}`}>
        hahahihi
      </div>
      <img className={`line ${lineClassName}`} alt="Line" src={line} />
    </div>
  );
};

TextContainer.propTypes = {
  text: PropTypes.string,
  line: PropTypes.string,
};
