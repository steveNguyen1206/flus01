import React from 'react';
import './EditTag.css';
import { useState } from 'react';
import { DeleteButton } from '@/components';

const EditTag = ({ tag_name }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeleteTag = () => {
  }

  return (
    <div className='edit-tag-container'>
      <div className='tag-name'>{tag_name}</div>
      <DeleteButton onClick={handleDeleteTag}/>
    </div>
  );
};

export default EditTag;
