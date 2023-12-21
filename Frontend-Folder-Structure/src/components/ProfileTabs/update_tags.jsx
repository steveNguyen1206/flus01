import React from 'react';
import './update_tags.css';
import { useState } from 'react';
import {UpdateButton, TagContainer} from '@/components'

const UpdateTags = ({ user_id }) => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='update-part-container'>
    <div className='title'>Job Tags</div>

    <div className='add-a-tag'>
      <input
        className='input-tag'
        type='text'
        placeholder='Add a tag'
        name='tag'
      />
      <UpdateButton button_name={"Add"}/>
    </div>

    <div className='current-tags'>
      <TagContainer list_tag={["tag1", "tag2"]}/>
    </div>
  
  </div>
  );
};

export default UpdateTags;
