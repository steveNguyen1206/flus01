import React from 'react';
import './update_name_contacts.css';
import { useState } from 'react';
import { EditTextField, UpdateButton } from '@/components';

const UpdateNameContacts = ({ user_id }) => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='update-part-container'>
      <div className='title'>Name & Contacts</div>

      <div className='fields'>
        <EditTextField field_name={"Profile Name"}/>
        <EditTextField field_name={"Account Name"}/>
        <EditTextField field_name={"Facebook Link"}/>
        <EditTextField field_name={"Instargram Link"}/>
        <EditTextField field_name={"Linkedin Link"}/>
      </div>

      <UpdateButton button_name={"Save Name & Contacts"}/>
    </div>
  );
};

export default UpdateNameContacts;
