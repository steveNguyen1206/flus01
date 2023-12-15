import React, { useState } from 'react';
// import UserService from './UserService';
import userDataService from '@/services/userDataServices';
import axios from 'axios';
import { useParams } from 'react-router';

const UpdateAvatarForm = () => {
    const userId = useParams();
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
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Update Avatar</button>
        </div>
    );
};

export default UpdateAvatarForm;