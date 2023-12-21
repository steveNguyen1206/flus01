import './update_tags.css';
import React, { useState, useEffect } from 'react';
import { UpdateButton, TagContainer } from '@/components';
import subcategoryService from '@/services/subcategoryService';

const UpdateTags = ({ user_id }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const initialSkills = [
    {
      'id': '',
      'subcategory_name': ''
    }
  ];

  const [skills, setSkills] = useState(initialSkills);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = () => {
    subcategoryService
      .findAll()
      .then((response) => {
        setSkills(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.message);
      });
  }

  const [value, setValue] = React.useState([0, 20000]);
  const [selectedSkills, setSelectedSkills] = React.useState([]);

  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    if (selectedOption) {
      setSelectedSkills((prevSkills) => [...prevSkills, selectedOption]);
    }
  };

  return (
    <div className="update-part-container">
      <div className="title">Job Tags</div>

      <div className="add-a-tag">
      <select className="input-tag" onChange={handleFilterChange}>
        {skills.map(skill => (
          <option key={skill.id} value={skill.subcategory_name}>
            {skill.subcategory_name}
          </option>
        ))}
      </select>

        <UpdateButton button_name={'Add'} />
      </div>

      <div className="current-tags">
        <TagContainer list_tag={['tag1', 'tag2']} />
      </div>
    </div>
  );
};

export default UpdateTags;
