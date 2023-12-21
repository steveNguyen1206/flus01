import React from 'react';
import './UpdateButton.css';
import { useState } from 'react';

const UpdateButton = ({ button_name }) => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='update-button'>
      {button_name}
    </div>
  );
};

export default UpdateButton;
