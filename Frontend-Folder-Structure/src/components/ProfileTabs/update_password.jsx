import React from 'react';
import './update_password.css';
import { useState } from 'react';
import { EditTextField, UpdateButton } from '@/components';

const UpdatePassword = ({ user_id }) => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='update-part-container'>
    <div className='title'>Password</div>

    <div className='fields'>
      <EditTextField field_name={"Current Password"} is_password={true} />
      <EditTextField field_name={"New Password"} is_password={true} />
      <EditTextField field_name={"Confirm Password"} is_password={true} />
    </div>

    <UpdateButton button_name={"Save Password"}/>
  </div>
  );
};

export default UpdatePassword;
