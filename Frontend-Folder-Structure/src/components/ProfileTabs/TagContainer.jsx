import React from 'react';
import './update_name_contacts.css';
import { useState } from 'react';
import { EditTag } from '..';

const TagContainer = ({ list_tag }) => {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className='tag-container'>
            <EditTag tag_name={"Truc Vy"} />
            <EditTag tag_name={"Truc Vy ahjhj"} />
            <EditTag tag_name={"Truc Vy"} />
            <EditTag tag_name={"Truc Vy 154651545451554485"} />
            <EditTag tag_name={"Truc Vy"} />
            <EditTag tag_name={"Truc Vy"} />
        </div>
    );
};

export default TagContainer;
