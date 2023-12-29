import './update_tags.css';
import React, { useState, useEffect } from 'react';
import { UpdateButton, TagContainer } from '@/components';
import subcategoryService from '@/services/subcategoryService';
import userSubcategoryService from '@/services/userSubcategoryServices';

const UpdateTags = ({ user_id }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const initialSkills = [
    {
      id: '',
      subcategory_name: '',
    },
  ];

  // get skills by user id
  const [userSkills, setUserSkills] = useState(initialSkills);

  useEffect(() => {
    getUserSkills();
  }, []);

  // get all skills of an user
  const getUserSkills = () => {
    userSubcategoryService
      .findAll(user_id)
      .then((response) => {
        setUserSkills(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.message);
      });
  };

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
        const filteredSkills = response.data.filter(
          (skill) =>
            !userSkills.some(
              (userSkill) =>
                userSkill.subcategory_name === skill.subcategory_name
            )
        );
        setSkills(filteredSkills);

        // setSkills(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.message);
      });

    console.log('SKILLS');
    console.log(skills);
  };

  const [selectingSkill, setSelectingSkill] = React.useState({});

  useEffect(() => {
    console.log("SELECTING SKILL: " + selectingSkill);
  }, [selectingSkill]);

  const handleSelectingSkillChange = (e) => {
    console.log("TARGET: "+ e.target.value);
    setSelectingSkill(e.target.value);
  };

  const handleAddTag = () => {
    const data = {
      userId: user_id,
      subcategoryId: selectingSkill,
    };

    userSubcategoryService
      .create(data)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.message);
      });
  };

  return (
    <div className="update-part-container">
      <div className="title">Job Tags</div>

      <div className="add-a-tag">
        <select className="input-tag" onChange={handleSelectingSkillChange}>
          {skills.map((skill) => (
            <option value={skill.id}>{skill.subcategory_name}</option>
          ))}
        </select>

        <UpdateButton button_name={'Add'} onClick={handleAddTag} />
      </div>

      <div className="current-tags">
        <TagContainer
          userId={user_id}
          list_tag={[
            { name: 'tag1', id: 1 },
            { name: 'tag2', id: 2 },
          ]}
        />
      </div>
    </div>
  );
};

export default UpdateTags;
