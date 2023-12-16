import React, { useState, useEffect } from 'react';
import './createFreelancerPost';
import exitButton from '../../assets/exitButton.png';
import googleIcon from '../../assets/SocialIcon/google.png';
import { useNavigate, useParams } from 'react-router';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import subcategoryService from '@/services/subcategoryService';
import freelancer_post_Service from '@/services/freelancer_post_Service';

const UpdateFreelancerPost = () => {
    // const { id } = useParams();
    // console.log(id);
  const initialSkills = [
    {
      'id': '',
      'subcategory_name': ''
    }
  ];

  const [skills, setSkills] = useState(initialSkills);
  const [aboutMe, setAboutMe] = useState('');
  const [aboutProduct, setAboutProduct] = useState('');
  const [lowestPrice, setLowestPrice] = useState('');
  const [imagePostUrls, setImagePostUrls] = useState('');

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

  const handleUpdate = (id) => {
    const freelancerPostData = {
      id: 1,
      freelancer_id: 3,
      about_me: aboutMe,
      skill_description: aboutProduct,
      lowset_price: lowestPrice,
      imgage_post_urls: imagePostUrls,
      skill_tag: document.getElementById("filter").value
    };
    console.log(freelancerPostData);
    // Kiểm tra các trường input trước khi gửi yêu cầu cập nhật

    freelancer_post_Service
      .update(freelancerPostData)
      .then(response => {
        console.log(response.data);
        // Thực hiện các hành động sau khi cập nhật thành công
      })
      .catch(error => {
        console.log(error);
        // Xử lý lỗi nếu cần
      });
  };
  return (
    <div className='main-container'>
      <div className="pop-up-new-post">
        <div className="signin-wrapper">
          <div className="navigation">
            <div className="header-popup-text">Update post</div>
          </div>

          <div className="info-field">
            <div className="input-container">
              <label htmlFor="inputUsername" className="form-label">
                Skill name*
              </label>
              <select className="filter" id="filter">
                <option value="" disabled defaultValue>
                  Add skills
                </option>
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
               {/* <input type="file"  /> */}
               <input
                 type="productMade"
                 name="productMade"
                 id="productMade"
                 class="form-control"
                 placeholder='Link image to product'
                 value={imagePostUrls}
                 onChange={e => setImagePostUrls(e.target.value)}
                 // aria-describedby="passwordHelpBlock"
               // onChange={handleInputChange}
               />
             </div>

            <div className="input-container">
              <label htmlFor="aboutMe" className="form-label">
                About Me
              </label>
              <input
                type="aboutMe"
                name="aboutMe"
                id="aboutMe"
                className="form-control"
                placeholder='Describe yourself here...'
                value={aboutMe}
                onChange={e => setAboutMe(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="aboutProduct" className="form-label">
                About my skill (or products)
              </label>
              <input
                type="aboutProduct"
                name="aboutProduct"
                id="aboutProduct"
                className="form-control"
                placeholder='Describe skill here...'
                value={aboutProduct}
                onChange={e => setAboutProduct(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="lowestPrice" className="form-label">
                Lowest Price ($ per product)*
              </label>
              <input
                type="lowestPrice"
                name="lowestPrice"
                id="lowestPrice"
                className="form-control"
                placeholder='Enter your lowest price here...'
                value={lowestPrice}
                onChange={e => setLowestPrice(e.target.value)}
              />
            </div>

            <div className="sign-in-button">
              <div className="div-wrapper">
                <button onClick={handleUpdate}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
                }
export default UpdateFreelancerPost;