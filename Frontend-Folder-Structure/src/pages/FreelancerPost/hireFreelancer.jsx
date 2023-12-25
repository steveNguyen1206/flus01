import React, { useState, useEffect } from 'react';
import { WhiteButton } from '@/components';
import './hireFreelancer.css';
import exitButton from '../../assets/exitButton.png';
import UploadIcon from '../../assets/UploadIcon.png';
import projectServices from '@/services/projectPostServices';
import subcategoryService from '@/services/subcategoryService';
import userDataService from '@/services/userDataServices';
import freelancer_post_Service from '@/services/freelancer_post_Service';

// const isValidTitle = (title) => {
//   if (!title) return false;
//   const titleRegex = /^[a-zA-Z0-9\s]*$/;
//   return titleRegex.test(title);
// };

// const isValidDetail = (detail) => {
//   const detailRegex = /^.{10,}$/;
//   return detailRegex.test(detail);
// };

// const isValidBudget = (budget) => {
//   if (budget === '') return false;
//   const budgetRegex = /^[0-9]*$/;
//   return budgetRegex.test(budget) && budget > 0;
// };

// const isValidTag = (tag) => {
//   if (!tag) return false;
//   const tagRegex = /^[a-zA-Z0-9\s/\\]*$/;
//   return tagRegex.test(tag);
// };

const HireFreelancer = ({ isOpen, onClose, onUpdate, setShowHirePopup }) => {
    const [showOverlay, setShowOverlay] = useState(isOpen);

    // const [error, setError] = useState({
    //   title: '',
    //   image: '',
    //   detail: '',
    //   budgetMin: '',
    //   budgetMax: '',
    //   tag: '',
    // });

    const [error, setError] = useState({

    });


    // const initState = {
    //   title: '',
    //   image: '',
    //   detail: '',
    //   budgetMin: '',
    //   budgetMax: '',
    //   tag: '',
    // };

    const initState = {
        about_me: '',
        skill_description: '',
        lowset_price: '',
        delivery_due: '',
        imgage_post_urls: '',
        skill_tag: '',
        image_file: null // Lấy file ảnh luôn
    };

    const validateForm = () => {
        let isValid = true;
        return isValid;
    };

    const [newPost, setNewPost] = useState(initState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost({ ...newPost, [name]: value });
        // console.log(newPost);
    };
    console.log("mèo méo meo mèo meo")
    const handleDoneClick = () => {
        console.log('Done clicked.');
        newPost.skill_tag = document.getElementById("filter").value;
        if (validateForm()) {
            console.log("From validated successfully.")
            console.log(newPost)
            freelancer_post_Service
                .sendPost(newPost)
                .then(() => {
                    console.log('Form is valid. Post submitted successfully.');
                    setShowOverlay(false);
                    onUpdate();
                    if (onClose) {
                        onClose();
                    }
                })
                .catch((error) => {
                    console.error('Error submitting post:', error.message);
                });
        } else {
            console.log('Form has errors. Please fix them.');
        }

    };


    return (
        <div className='bckgrd'>
            {showOverlay && <div className="overlay" />}
            <div className="bid-popup">
                <button className="exit-button" onClick={() => {
                        setShowHirePopup(false);
                        onClose();
                    }}>
                    <img src={exitButton} alt="Exit" />
                </button>
                <div className="bid-popup-header">
                    <p>Hire Freelancer</p>
                </div>

                <div className="bid-popup-body">
                    <div className="clientNameInput">
                    <label htmlFor="clientName">Client's Name *</label>
                    <input
                        type="text"
                        id="clientName"
                        name="name"
                        placeholder="Enter name ..."
                        onChange={handleInputChange}
                        // value={bid.name}
                    />
                    <div className="error-message">{error.name}</div>
                    </div>
                    <div className="client-company-input">
                    <label htmlFor="clientCompany">Company name*</label>
                    <input
                        type="text"
                        id="clientCompany"
                        name="company"
                        placeholder="Add company name..."
                        onChange={handleInputChange}
                        // value={bid.company}
                    />
                    <div className="error-message">{error.skill}</div>
                    </div>

                    <div className="client-email-input">
                    <label htmlFor="clientEmail">Email *</label>
                    <input
                        type="email"
                        id="clientEmail"
                        name="email"
                        placeholder="E.g: abc@gmail.com"
                        onChange={handleInputChange}
                        // value={bid.email}
                    />
                    <div className="error-message">{error.email}</div>
                    </div>

                    <div className="client-job-description-input">
                    <label htmlFor="clientJobDes">Job Description *</label>
                    <textarea
                        type="text"
                        id="clientJobDes"
                        name="job-description"
                        placeholder="Enter job description ..."
                        onChange={handleInputChange}
                        // value={bid.message}
                    />
                    <div className="error-message">{error.message}</div>
                    </div>

                    <div className="client-price-input">
                    <label htmlFor="clientPrice">Budget *</label>
                    <input
                        type="text"
                        id="clientBudget"
                        name="budget"
                        placeholder="Enter budget ..."
                        onChange={handleInputChange}
                        // value={bid.price}
                    />
                    <div className="error-message">{error.price}</div>
                    </div>

                    <div className="project-date">
                        <div className="start-date">
                            <label htmlFor="startDate">Start date *</label>
                            <input
                                type="text"
                                id="startDate"
                                name="start_date"
                                // placeholder="Describe your skill here..."
                                // defaultValue={newPost.skill_description}
                                // onChange={handleInputChange}
                            />
                            <div className="error-message">{error.detail}</div>
                        </div>
                        <div className="end-date">
                            <label htmlFor="endDate">End date *</label>
                            <input
                                type="text"
                                id="endDate"
                                name="end_date"
                                // placeholder="Describe your skill here..."
                                // defaultValue={newPost.skill_description}
                                // onChange={handleInputChange}
                            />
                        </div>
                    <div className="error-message">{error.duration}</div>
                    </div>

                    <WhiteButton text="Send" onClick={handleDoneClick} />
                </div>
            </div>
        </div>
    );
};

export default HireFreelancer;