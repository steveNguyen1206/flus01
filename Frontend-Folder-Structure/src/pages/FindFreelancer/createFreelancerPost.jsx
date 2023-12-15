import React, { useState, useEffect } from 'react';
import './createFreelancerPost.css';
import exitButton from '../../assets/exitButton.png';
import googleIcon from '../../assets/SocialIcon/google.png';
import { useNavigate } from 'react-router';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import subcategoryService from '@/services/subcategoryService';


const CreateFreelancerPost = () => {

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
      });
  }


  return (
    <div
      className='main-container'
    >
      <div className="pop-up-new-post">
        <div className="signin-wrapper">
          <div className="navigation">
            <div className="header-popup-text">New post</div>
          </div>

          <div className="info-field">
            <div className="input-container">
              <label for="inputUsername" class="form-label">
                Skill name*
              </label>
              <select className="filter">
                <option value="" disabled defaultValue>
                  Add skills
                </option>
                {/* <option value="web_design">Web Design</option>
                <option value="photography">Photography</option>
                <option value="backend_dev">Backend Development</option> */}
                {skills.map(skill => (
                  <option key={skill.id} value={skill.id}>
                    {skill.subcategory_name}
                  </option>
                ))}
              </select>

            </div>
            <div className="input-container">
              <label for="productMade" class="form-label">
                Product I have made in this skills*
              </label>
              <input
                type="productMade"
                name="productMade"
                id="productMade"
                class="form-control"
                // aria-describedby="passwordHelpBlock"
              // onChange={handleInputChange}
              />
            </div>

            <div className="input-container">
              <label for="aboutMe" class="form-label">
                About Me
              </label>
              <input
                type="aboutMe"
                name="aboutMe"
                id="aboutMe"
                class="form-control"
                placeholder='Describe yourself here...'
                // aria-describedby="passwordHelpBlock"
              // onChange={handleInputChange}
              />
            </div>

            <div className="input-container">
              <label for="aboutProduct" class="form-label">
                About my skill (or products)
              </label>
              <input
                type="aboutProduct"
                name="aboutProduct"
                id="aboutProduct"
                class="form-control"
                placeholder='Describe skill here...'

                // aria-describedby="passwordHelpBlock"
              // onChange={handleInputChange}
              />
            </div>

            <div className="input-container">
              <label for="lowestPrice" class="form-label">
                Lowest Price ($ per product)*
              </label>
              <input
                type="lowestPrice"
                name="lowestPrice"
                id="lowestPrice"
                class="form-control"
                placeholder='Enter your lowest price here...'
                // aria-describedby="passwordHelpBlock"
              // onChange={handleInputChange}
              />
            </div>



            <div className="sign-in-button">
              <div className="div-wrapper">
                <div className="text-wrapper-2 button">
                  Post
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFreelancerPost;
