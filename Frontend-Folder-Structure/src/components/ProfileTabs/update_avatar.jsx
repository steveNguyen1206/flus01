import React from 'react';
import './update_avatar.css';
import { useState } from 'react';
import profileCover from '../../assets/profile_cover.jpg';

const UpdateAvartar = ({ user_id, avt_url }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleAvatarClick = () => {
    // call API to update avatar
  };

  return (
    <div> 
      <div className="update-avatar-section">
        <div className="update-avatar-container" onClick={handleAvatarClick}>
          <img className="update-ellipse" alt="Ellipse" src={avt_url} />
        </div>

        <div className='update-avatar-text'>
          Click to change profile picture
        </div>
      </div>  
    </div>
  );
};

export default UpdateAvartar;
