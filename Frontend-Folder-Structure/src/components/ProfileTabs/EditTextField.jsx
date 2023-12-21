import React from 'react';
import './EditTextField.css';
import { useState } from 'react';

const EditTextField = ({ field_name, is_password = false }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const type = is_password ? 'password' : 'text';

  return (
    <div className='edit-text-container'>
      {/* Field name */}
      <div className='field-name'>{field_name}</div>

      {/* Input field box */}
      <input type={type} className='input-field' />
    </div>
  );
};

export default EditTextField;
