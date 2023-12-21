import React from 'react';
import './TagContainer.css';
import { useState } from 'react';
import { EditTag } from '..';

const TagContainer = ({ list_tag }) => {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className='tag-container'>
            {list_tag.map((tag) => (
                <EditTag tag_name={tag} />
            ))}
        </div>
    );
};

export default TagContainer;
