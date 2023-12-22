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

  // get skills by user id
  const [userSkills, setUserSkills] = useState(initialSkills);

  useEffect(() => {
    getUserSkills();
  }, []);

  // get all skills in database
  const getUserSkills = () => {
    // userSubcategoryServices
    //   .findAllSkillsByUserId(user_id)
    //   .then((response) => {
    //     setUserSkills(response.data);
    //     console.log("USER SKILL: " + response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     setErrorMessage(e.message);
    //   });
  }

  const [skills, setSkills] = useState(initialSkills);

  useEffect(() => {
    getSkills();
  }, []);

  // get all skills in database
  const getSkills = () => {
    subcategoryService
      .findAll()
      .then((response) => {
        // remove skills that user already has
        const filteredSkills = response.data.filter(skill => !userSkills.some(userSkill => userSkill.subcategory_name === skill.subcategory_name));
        setSkills(filteredSkills);

        // setSkills(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.message);
      });
  }

  const [selectingSkill, setSelectingSkill] = React.useState({});

  const handleSelectingSkillChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      setSelectingSkill(selectedOption);
      console.log(selectingSkill);
    }
  };

  return (
    <div className="update-part-container">
      <div className="title">Job Tags</div>

      <div className="add-a-tag">
      <select className="input-tag" onChange={handleSelectingSkillChange}>
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
