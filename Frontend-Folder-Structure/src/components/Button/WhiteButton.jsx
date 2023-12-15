import React from 'react';
import './WhiteButton.css';

const WhiteButton = ({name, onClick}) => {
  return <button className="white-button" onClick={onClick}>{name}</button>;
};
export default WhiteButton;
