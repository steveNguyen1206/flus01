import React from 'react';
import './popup_update_profile.css';
import { useState } from 'react';
import { DeleteButton, RedCloseButton } from '@/components';

const PopupUpdateProfile = ({ m_state, m_function, user_id }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleCloseIconClick = () => {
    m_function(false);
  };

  return (
    <div className="update-profile-container">
      <div className="popup-update-profile">
        <div className="close-popup-button">
          <RedCloseButton onClick={handleCloseIconClick} />
        </div>
      </div>
    </div>
  );
};

export default PopupUpdateProfile;
