import React from 'react';
import './EditTag.css';
import { useState } from 'react';
import { DeleteButton } from '@/components';
import userSubcategoryService from '@/services/userSubcategoryServices';  
      
const EditTag = ({ tag_name, tag_id, user_id }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeleteTag = () => {
    const data = {
      userId: user_id,
      subcategoryId: tag_id
    };

    userSubcategoryService.deleteSubcategory(data)
      .then((response) => {
        console.log(response.data);
        // window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.message);
      });
  }

  return (
    <div className='edit-tag-container'>
      <div className='tag-name'>{tag_name}</div>
      <DeleteButton onClick={handleDeleteTag}/>
    </div>
  );
};

export default EditTag;
