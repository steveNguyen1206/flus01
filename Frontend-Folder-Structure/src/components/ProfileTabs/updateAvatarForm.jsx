import React, { useState } from 'react';
import userDataService from '@/services/userDataServices';
import { useParams } from 'react-router-dom';
import { UpdateButton } from '@/components';
import './updateAvatarForm.css';

const UpdateAvatarForm = () => {
  const { userId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
        userDataService.updateAvatar(userId, selectedFile)
            .then(response => {
                // Handle the response data
                console.log(response);
                console.log("ameomeo")
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
                console.log("ahuhu")

            });
    }
};

  return (
    <div className='update-avatar-buttons'>
      <input className='chose-file-button' type="file" onChange={handleFileChange} />
      <UpdateButton button_name={"Update Avatar"} onClick={handleUpload} />
    </div>
  );
};

export default UpdateAvatarForm;