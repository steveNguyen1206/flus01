import React, { useState } from 'react';
import { WhiteButton } from '@/components';
import './updatePost.css';
import exitButton from '../../assets/exitButton.png';
import UploadIcon from '../../assets/UploadIcon.png';
import projectServices from '@/services/projectPostServices';

const isValidTitle = (title) => {
  if (!title) return true;
  const titleRegex = /^[a-zA-Z0-9\s]*$/;
  return titleRegex.test(title);
};

const isValidDetail = (detail) => {
  if (!detail) return true;
  const detailRegex = /^.{10,}$/;
  return detailRegex.test(detail);
};

const isValidBudget = (budget) => {
  if (!budget) return true;
  const budgetRegex = /^[0-9]*$/;
  return budgetRegex.test(budget) && budget > 0;
};

const isValidTag = (tag) => {
  if (!tag) return true;
  const tagRegex = /^[a-zA-Z0-9\s/\\]*$/;
  return tagRegex.test(tag);
};

const isValidImage = (image) => {
  return true;
};

const UpdatePost = ({ isOpen, onClose, projectId, onUpdate}) => {
  const [showOverlay, setShowOverlay] = useState(isOpen);
  const [error, setError] = useState({
    title: '',
    image: '',
    detail: '',
    budgetMin: '',
    budgetMax: '',
    tag: '',
  });

  const initState = {
    title: '',
    image: '',
    detail: '',
    budgetMin: '',
    budgetMax: '',
    tag: '',
  };

  const [fileName, setFileName] = useState('');
  const [updatePost, setUpdatePost] = useState(initState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatePost({ ...updatePost, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    setUpdatePost({ ...updatePost, image: file });
  };

  const validateForm = () => {
    const newErrors = { ...error };

    // Reset errors
    newErrors.title = '';
    newErrors.image = '';
    newErrors.detail = '';
    newErrors.budgetMin = '';
    newErrors.budgetMax = '';
    newErrors.tag = '';

    let isValid = true;

    if (!isValidTitle(updatePost.projectTitle)) {
      newErrors.title =
        'Invalid title. Title must be alphanumeric and not empty.';
      isValid = false;
    }

    if (!isValidImage(updatePost.image)) {
      newErrors.image = 'Please select an image.';
      isValid = false;
    }

    if (!isValidDetail(updatePost.detail)) {
      newErrors.detail = 'Project detail must have at least 10 characters.';
      isValid = false;
    }

    if (!isValidTag(updatePost.tag)) {
      newErrors.tag = 'Project tag must be a string.';
      isValid = false;
    }

    if (Number(updatePost.budgetMin) > Number(updatePost.budgetMax)) {
      newErrors.budgetMin =
        'Minimum budget must be less than or equal to maximum budget.';
      newErrors.budgetMax =
        'Minimum budget must be less than or equal to maximum budget.';
      isValid = false;
    }

    if (!isValidBudget(updatePost.budgetMin)) {
      isValid = false;
      newErrors.budgetMin =
        'Invalid budget. Please enter a valid number greater than or equal to 0.';
    }

    if (!isValidBudget(updatePost.budgetMax)) {
      isValid = false;
      newErrors.budgetMax =
        'Invalid budget. Please enter a valid number greater than or equal to 0.';
    }

    if (
      (updatePost.budgetMin || updatePost.budgetMax) &&
      (!updatePost.budgetMin || !updatePost.budgetMax)
    ) {
      newErrors.budgetMin =
        'Both minimum and maximum budget must be updated together.';
      newErrors.budgetMax =
        'Both minimum and maximum budget must be updated together.';
      isValid = false;
    }

    // if all fields are valid, isValid will be false
    let allFieldsEmpty = true;
    Object.keys(updatePost).forEach((key) => {
      if (updatePost[key]) allFieldsEmpty = false;
    });

    if (allFieldsEmpty) {
      newErrors.title = 'Please fill in at least one field.';
      isValid = false;
    }
    setError(newErrors);
    return isValid;
  };

  const data = {
    title: updatePost.title,
    image: updatePost.image,
    detail: updatePost.detail,
    budgetMin: updatePost.budgetMin,
    budgetMax: updatePost.budgetMax,
    tag: updatePost.tag,
    id: projectId,
  };

  const handleUpdateClick = () => {
    if (validateForm()) {
      console.log(data);
      projectServices
        .updatePost(data)
        .then(() => {
          console.log('Form is valid. Project submitted successfully.');
          setShowOverlay(false);
          onUpdate();
          if (onClose) {
            onClose();
          }
        })
        .catch((error) => {
          console.error('Error submitting project:', error.message);
        });
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <>
      {showOverlay && <div className="overlay" />}
      <div className="update-project-form">
        <button onClick={onClose} className="exit-button">
          <img src={exitButton} alt="Exit" />
        </button>
        <div className="update-project-header">
          <p>UPDATE JOB POST</p>
        </div>

        <div className="update-project-body">
          <div className="project-title-input">
            <label htmlFor="projectTitle">Job Title</label>
            <input
              type="text"
              id="projectTitle"
              name="title"
              placeholder="Enter project title ..."
              value={updatePost.title}
              onChange={handleInputChange}
            />
            <div className="error-message">{error.title}</div>
          </div>

          <div className="add-image-input">
            <label htmlFor="addImage">Add Image</label>
            <div className="add-image-container">
              <div className="file-input-container">
                <img
                  className="upload-icon"
                  src={UploadIcon}
                  alt="Upload Icon"
                />
                <div className="file-input-text">
                  <p>
                    Drag & drop files <span className="browse-text">or</span>
                    <label htmlFor="fileInput" className="browse-label">
                      Browse
                    </label>
                  </p>
                  <input
                    type="file"
                    id="fileInput"
                    name="image"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  {fileName && <p className="file-name">{fileName}</p>}
                </div>
              </div>
              <p className="supported-formats">
                Supported formats: JPEG, PNG, JPG
              </p>
            </div>
            <div className="error-message">{error.image}</div>
          </div>

          <div className="project-tag-input">
            <label htmlFor="projectTag">Job Tag</label>
            <input
              type="text"
              id="projectTag"
              name="tag"
              placeholder="Enter project tag ..."
              value={updatePost.tag}
              onChange={handleInputChange}
            />
            <div className="error-message">{error.tag}</div>
          </div>

          <div className="project-detail-input">
            <label htmlFor="projectDetail">Job Detail</label>
            <textarea
              type="text"
              id="projectDetail"
              name="detail"
              placeholder="Enter project details ..."
              onChange={handleInputChange}
              value={updatePost.detail}
            />
            <div className="error-message">{error.detail}</div>
          </div>

          <div className="project-range-budget">
            <div className="budget-min-input">
              <label htmlFor="budgetMin">Budget Min</label>
              <input
                type="text"
                id="budgetMin"
                name="budgetMin"
                placeholder="Enter minimum budget ..."
                onChange={handleInputChange}
                value={updatePost.budgetMin}
              />
              <div className="error-message">{error.budgetMin}</div>
            </div>

            <div className="budget-max-input">
              <label htmlFor="budgetMax">Budget Max</label>
              <input
                type="text"
                id="budgetMax"
                name="budgetMax"
                placeholder="Enter maximum budget ..."
                onChange={handleInputChange}
                value={updatePost.budgetMax}
              />
              <div className="error-message">{error.budgetMax}</div>
            </div>
          </div>

          <WhiteButton text="Update Project" onClick={handleUpdateClick} />
        </div>
      </div>
    </>
  );
};

export default UpdatePost;