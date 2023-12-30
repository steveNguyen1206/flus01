import React from 'react';
import './TagContainer.css';
import { useState } from 'react';
import { EditTag } from '..';

const TagContainer = ( { userId, list_tag }) => {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className='tag-container'>
            {list_tag.map((tag) => (
                <EditTag tag_name={tag.subcategory_name} tag_id={tag.id} user_id={userId}/>
            ))}
        </div>
    );
};

export default TagContainer;
