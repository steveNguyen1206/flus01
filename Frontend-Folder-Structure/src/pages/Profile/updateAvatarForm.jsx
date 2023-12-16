import React, { useState } from 'react';
import userDataService from '@/services/userDataServices';
import { useParams } from 'react-router-dom';

const UpdateAvatarForm = () => {
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);

      userDataService.updateAvatar(id, formData)
        .then(response => {
          // Handle the response data
          console.log(response);
          console.log('Update successful');
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
          console.log('Update failed');
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Update Avatar</button>
    </div>
  );
};

export default UpdateAvatarForm;