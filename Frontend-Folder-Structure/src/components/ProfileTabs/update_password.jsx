import React from 'react';
import './update_password.css';
import { useState } from 'react';
import { EditTextField, UpdateButton } from '@/components';
import UserDataServices from '@/services/userDataServices';

const UpdatePassword = ({ user_id }) => {
  const [errorMessage, setErrorMessage] = useState('');

  // handle current password change
  const [currentPassword, setCurrentPassword] = useState(''); // [currentPassword, setCurrentPassword
  
  const onCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  // handle new password change
  const [newPassword, setNewPassword] = useState(''); // [newPassword, setNewPassword

  const onNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // handle confirm password change
  const [confirmPassword, setConfirmPassword] = useState(''); // [confirmPassword, setConfirmPassword

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // handle update password
  const updatePassword = () => { 
    // check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      console.log('Confirm Password does not match');
      setErrorMessage('Confirm Password does not match');
      return;
    }
    
    // call API to check if current password is correct & update password
    const data = {
      id: user_id,
      oldPassword: currentPassword,
      newPassword: newPassword
    };

    UserDataServices.changePassword(data)
    .then((response) => {
      console.log(response.data);
      // setErrorMessage('Password updated successfully');
    })
    .catch((e) => {
      console.log(e);
      // setErrorMessage('Password update failed');
    });

  };

  return (
    <div className='update-part-container'>
    <div className='title'>Password</div>

    <div className='fields'>
      <EditTextField field_name={"Current Password"} is_password={true} onChange={onCurrentPasswordChange}/>
      <EditTextField field_name={"New Password"} is_password={true} onChange={onNewPasswordChange}/>
      <EditTextField field_name={"Confirm Password"} is_password={true} onChange={onConfirmPasswordChange}/>
    </div>

    <UpdateButton button_name={"Save Password"} onClick={updatePassword}/>
  </div>
  );
};

export default UpdatePassword;
